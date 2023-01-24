describe("Home", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should display home screen", async () => {
    await expect(element(by.text("HOW MANY PLAYERS?"))).toBeVisible();
  });

  it("should turn music on/off", async () => {
    const musicSwitchElement = element(by.id("music-switch"));

    await musicSwitchElement.longPress();
    await expect(element(by.text("TURN MUSIC OFF"))).toBeVisible();

    await musicSwitchElement.longPress();
    await expect(element(by.text("TURN MUSIC ON"))).toBeVisible();
  });
});
