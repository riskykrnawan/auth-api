const ClientError = require('./ClientError');

class InvarianteError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InvariantError';
  }
}

module.exports = InvarianteError;
