(async function(){
	//Màn hình luôn luôn bật!
    await ExecShell ("svc power stayon true");
    Log("OK");
})();