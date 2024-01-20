(async function(){
    //Chinh lai 2 dong` ben duoi thanh thong tin wifi cua ban
    const tenWifi = "Ten_Wifi";
    const matkhauWifi = "PasswordWifi";
  
    await ExecAdbCmd("shell", "am", "start", "-a", "android.settings.SETTINGS");
    await Delay(1000);
    await TapBySelector(`[text="Network & internet"]`);
    await Delay(1000);
    await TapBySelector(`[text="Not connected"]`);
    await Delay(3000);
    await TapBySelector(`[text="${tenWifi}"]`);
    await Delay(2000);
    await SendText(matkhauWifi);
    await SendKeyEvent("KEYCODE_ENTER");
})();
