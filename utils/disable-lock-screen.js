(async function(){
	//Tắt khóa màn hình, chỉ cần bấm nút nguồn là lên, k phải vuốts
    await ExecShell("locksettings set-disabled True");
})();
