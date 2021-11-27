type Constructor = { new(...args: any[]): object };

const decorator = (templateFunction: () => JSX.Element) =>
    <T extends Constructor>(constructor: T): T => class extends constructor {
        render() {
            return templateFunction.bind(constructor)();
        }
    };

export {decorator as ReactComponent};
