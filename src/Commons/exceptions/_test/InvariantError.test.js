const InvariantError = require('../InvariantError');

describe('InvarianteError', () => {
  it('should create an error correctly', () => {
    const invarianteError = new InvariantError('an error occurs');

    expect(invarianteError.statusCode).toEqual(400);
    expect(invarianteError.message).toEqual('an error occurs');
    expect(invarianteError.name).toEqual('InvariantError');
  })
})