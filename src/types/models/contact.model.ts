import { AddressModel } from "./address.model";

export interface ContactModel {
    name: string;
    age: string;
    address: AddressModel;
}
