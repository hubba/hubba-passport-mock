class MockStrategy {
    constructor(options) {
        this.shouldPass = options.shouldPassAuthentication;
        this.user = options.user;
    };

    authenticate(req) {
        if ( this.shouldPass ) {
            this.success(this.user);
        } else {
            this.fail('Unauthorized');
        }
    };
};

module.exports = MockStrategy;