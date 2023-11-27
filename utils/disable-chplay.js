(async function(){
	//Disable CHPlay cho nhưng ai ko cần, tránh google update mỗi khi change
    await ExecShell('pm disable-user com.android.vending')
})();
