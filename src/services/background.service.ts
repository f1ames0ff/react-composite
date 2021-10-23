const service = class BackgroundService {
    private readonly STATE = {
        background: ''
    };

    get background(): string {
        return this.STATE.background;
    }
}

export {service as backgroundService};
