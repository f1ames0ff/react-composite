import Dexie, {PromiseExtended} from "dexie";
import {ContactModel} from "../types/models/contact.model";
import {from, Observable, ObservedValueOf} from 'rxjs';

export abstract class ContactsDbAdapter {
    private static dexieInstance: Dexie;
    private static table: Dexie.Table;
    private static schema = [
        '++id',
        'name',
        'age',
        'address'
    ];

    static initDb(): void {
        this.dexieInstance = new Dexie("contacts-db");

        const version = this.dexieInstance.version(1);

        version.stores({
            contactsTable: this.schema.join(',')
        });

        this.table = (this.dexieInstance as Dexie & { contactsTable: Dexie.Table }).contactsTable;
    }

    static addContact(contact: ContactModel): Observable<ObservedValueOf<PromiseExtended<ContactModel>>> {
        return from(this.table.put(contact));
    }

    static findContact(contact: ContactModel): Observable<ObservedValueOf<PromiseExtended<ContactModel>>> {
        const collection = this.table.filter((item) => {
            return item.age === contact.age
                && item.contactsTable === contact.name
                && item.address.city === contact.address.city
                && item.address.postalCode === contact.address.postalCode
                && item.address.street === contact.address.street
        });

        return from(collection.first());
    }

    static deleteContact(id: number): Observable<ObservedValueOf<PromiseExtended<void>>> {
        return from(this.table.delete(id));
    }
}
