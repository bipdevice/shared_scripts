(async function(){
    //Demo gõ phím / sendtext
    const kbMapS9 = {
        ".": [1152, 2688],
        " ": [732, 2664],
        q: [72, 2014],
        w: [221, 2010],
        e: [361, 2010],
        r: [504, 2010],
        t: [652, 2010],
        y: [790, 2010],
        u: [941, 2010],
        i: [1081, 2010],
        o: [1225, 2010],
        p: [1369, 2010],
        a: [145, 2233],
        s: [285, 2233],
        d: [440, 2233],
        f: [578, 2233],
        g: [719, 2233],
        h: [872, 2233],
        j: [1008, 2233],
        k: [1148, 2233],
        l: [1299, 2233],
        z: [290, 2454],
        x: [432, 2454],
        c: [579, 2454],
        v: [724, 2454],
        b: [866, 2454],
        n: [1014, 2454],
        m: [1148, 2454],
    };

    async function SimpleTyping(text, delayFrom, delayTo) {
        const points = [];
        for (const l of text.toLowerCase()) {
            if (kbMapS9[l]) {
                points.push({
                    x: kbMapS9[l][0],
                    y: kbMapS9[l][1],
                    delay: RandomInt(delayFrom, delayTo)
                })
            }
        }
        
        await TapMulti(points);
    }

    LogSuccess("Gõ chậm");
    await SimpleTyping("bipdevice.io", 200, 300);
    await Delay(2000);
    LogInfo("Gõ nhanh hơn");
    await SimpleTyping("bipdevice.io", 50, 100);
    await Delay(2000);
    LogWarn("Gõ nhanh khủng khiếp");
    await SimpleTyping("bipdevice.io");
    await Delay(2000);
    LogError("Anh hùng bàn phím");
    await SimpleTyping("qwertyuioplkjhgfdsazxcvbnmmnbvcxzasdfghjklpoiuytrewq");
    await Delay(2000);
    
    LogSuccess("Sendtext chậm");
    await SendText("bipdevice.io", 50, 100);
    await Delay(2000);
    LogSuccess("Sendtext nhanh");
    await SendText("bipdevice.io");
})();
