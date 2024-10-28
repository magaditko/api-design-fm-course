import * as user from '../user'
describe('user handler', () => {
  beforeEach(() => {
    // or inside one of the other hooks make sure
    // that we reset the database and our tests
    // are not dependant

  })
  
  it('should create new user', async () => {
    const res = {
      json({token}) {
        expect(token).toBeTruthy();
      },
    };
    const req = {body: {username: 'hello6', password: 'hi'}}
    const spyRes = jest.spyOn(res, 'json')

    await user.createNewUser(req, res, () => {}).then(() => {
      expect(spyRes).toHaveBeenCalledTimes(1)
    })
  })
})