export class Fundme {
  public amountRaised: number = 0;
  public backers: number = 0;
  constructor (public name: string, public people: string, public description: string, public goal: number, public moneyDesc: string, public rewards: string, public category: string, public type: string, public image: string, public date: string, public location: string, public video: string) { }
}
