(async function(){
	//Tắt nguồn máy
    await ExecAdbCmd("reboot", "poweroff")
})();
