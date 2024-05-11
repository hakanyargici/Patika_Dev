function vowelsAndConsonants(s) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    const vowelsChar = [];
    const isNotvowelsChar = [];

    for(var i = 0; i < s.length; i++){
        if (vowels.includes(s[i])) {
            vowelsChar.push(s[i]);
        } else {
            isNotvowelsChar.push(s[i]);
        }
    }

    for (var j = 0; j < vowelsChar.length; j++) {
        console.log(vowelsChar[j]);
    }
    for (var j = 0; j < isNotvowelsChar.length; j++) {
        console.log(isNotvowelsChar[j]);
    }
}

vowelsAndConsonants("javascriptloops");

/*
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
*/