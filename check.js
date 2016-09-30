function Touching(x) {
switch(x){
  case 0:
          return [1,9,10];
  case 1:
          return [0,2,10,11];
  case 2:
          return [1,3,11,12];
  case 3:
          return [2,4,12,13];
  case 4:
          return [3,5,13,14];
  case 5:
          return [4,6,14,15];
  case 6:
          return [5,7,15,16];
  case 7:
          return [6,16,17];
  case 8:
          return [9,19,20];
  case 9:
          return [8,10,20,21];
  case 10:
          return [0,1,9,11,21,22];
  case 11:
          return [1,2,10,12,22,23];
  case 12:
          return [2,3,11,13,23,24];
  case 13:
          return [3,4,12,14,24,25];
  case 14:
          return [4,5,13,15,25,26];
  case 15:
          return [5,6,14,16,26,27];
  case 16:
          return [6,7,15,17,27,28];
  case 17:
          return [7,16,18,28,29];
  case 18:
          return [17,29,30];
  case 19:
          return [8,20,31];
  case 20:
          return [8,9,19,21,31,32];
  case 21:
          return [9,10,20,22,32,33];
  case 22:
          return [10,11,21,23,33,34];
  case 23:
          return [11,12,22,24,34,35];
  case 24:
          return [12,13,23,25,35,36];
  case 25:
          return [13,14,24,26,36,37];
  case 26:
          return [14,15,25,27,37,38];
  case 27:
          return [15,16,26,28,38,39];
  case 28:
          return [16,17,27,29,39,40];
  case 29:
          return [17,18,28,30,40,41];
  case 30:
          return [18,29,41];
  case 31:
          return [19,20,32,42,43];
  case 32:
          return [20,21,31,33,43,44];
  case 33:
          return [21,22,32,34,44,45];
  case 34:
          return [22,23,33,35,45,46];
  case 35:
          return [23,24,34,36,46,47];
  case 36:
          return [24,25,35,37,47,48];
  case 37:
          return [25,26,36,38,48,49];
  case 38:
          return [26,27,37,39,49,50];
  case 39:
          return [27,28,38,40,50,51];
  case 40:
          return [28,29,39,41,51,52];
  case 41:
          return [29,30,40,52,53];
  case 42:
          return [31,43,54];
  case 43:
          return [31,32,42,44,54,55];
  case 44:
          return [32,33,43,45,55,56];
  case 45:
          return [33,34,44,46,56,57];
  case 46:
          return [34,35,45,47,57,58];
  case 47:
          return [35,36,46,48,58,59];
  case 48:
          return [36,37,47,49,59,60];
  case 49:
          return [37,38,48,50,60,61];
  case 50:
          return [38,39,49,51,61,62];
  case 51:
          return [39,40,50,52,62,63];
  case 52:
          return [40,41,51,53,63,64];
  case 53:
          return [41,52,64];
  case 54:
          return [42,43,55,65,];
  case 55:
          return [43,44,54,56,65,66];
  case 56:
          return [44,45,55,57,66,67];
  case 57:
          return [45,46,56,58,67,68];
  case 58:
          return [46,47,57,59,68,69];
  case 59:
          return [47,48,58,60,69,70];
  case 60:
          return [48,49,59,61,70,71];
  case 61:
          return [49,50,60,62,71,72];
  case 62:
          return [50,51,61,63,72,73];
  case 63:
          return [51,52,62,64,73,74];
  case 64:
          return [52,53,63,74];
  case 65:
          return [54,55,66,75,76];
  case 66:
          return [55,56,65,67,76,77];
  case 67:
          return [56,57,66,68,77,78];
  case 68:
          return [57,58,67,69,78,79];
  case 69:
          return [58,59,68,70,79,80];
  case 70:
          return [59,60,69,71,80,81];
  case 71:
          return [60,61,70,72,81,82];
  case 72:
          return [61,62,71,73,82,83];
  case 73:
          return [62,63,72,74,83,84];
  case 74:
          return [63,64,73,84,85];
  case 75:
          return [65,76,86,87];
  case 76:
          return [65,66,75,77,87,88];
  case 77:
          return [66,67,76,78,88,89];
  case 78:
          return [67,68,77,79,89,90];
  case 79:
          return [68,69,78,80,90,91];
  case 80:
          return [69,70,79,81,91,92];
  case 81:
          return [70,71,80,82,92,93];
  case 82:
          return [71,72,81,83,93,94];
  case 83:
          return [72,73,82,84,94,95];
  case 84:
          return [73,74,83,85,95,96];
  case 85:
          return [74,84,96,97];
  case 86:
          return [75,87,98];
  case 87:
          return [75,76,86,88,98,99];
  case 88:
          return [76,77,87,89,99,100];
  case 89:
          return [77,78,88,90,100,101];
  case 90:
          return [78,79,89,91,101,102];
  case 91:
          return [79,80,90,92,102,103];
  case 92:
          return [80,81,91,93,103,104];
  case 93:
          return [81,82,92,94,104,105];
  case 94:
          return [82,83,93,95,105,106];
  case 95:
          return [83,84,94,96,106,107];
  case 96:
          return [84,85,95,97,107,108];
  case 97:
          return [85,96,108];
  case 98:
          return [86,87,99,109,110];
  case 99:
          return [87,88,98,100,110,111];
  case 100:
          return [88,89,99,101,111,112];
  case 101:
          return [89,90,100,102,112,113];
  case 102:
          return [90,91,101,103,113,114];
  case 103:
          return [91,92,102,104,114,115];
  case 104:
          return [92,93,103,105,115,116];
  case 105:
          return [93,94,104,106,116,117];
  case 106:
          return [94,95,105,107,117,118];
  case 107:
          return [95,96,106,108,118,119];
  case 108:
          return [96,97,107,119,120];
  case 109:
          return [98,,110,121];
  case 110:
          return [98,99,109,111,121,122];
  case 111:
          return [99,100,110,112,122,123];
  case 112:
          return [100,101,111,113,123,124];
  case 113:
          return [101,102,112,114,124,125];
  case 114:
          return [102,103,113,115,125,126];
  case 115:
          return [103,104,114,116,126,127];
  case 116:
          return [104,105,115,117,127,128];
  case 117:
          return [105,106,116,118,128,129];
  case 118:
          return [106,107,117,119,129,130];
  case 119:
          return [107,108,118,120,130,131];
  case 120:
          return [108,119,131];
  case 121:
          return [109,110,122];
  case 122:
          return [110,111,121,123,132];
  case 123:
          return [111,112,122,124,132,133];
  case 124:
          return [112,113,123,125,133,134];
  case 125:
          return [113,114,124,126,134,135];
  case 126:
          return [114,115,125,127,135,136];
  case 127:
          return [115,116,126,128,136,137];
  case 128:
          return [116,117,127,129,137,138];
  case 129:
          return [117,118,128,130,138,139];
  case 130:
          return [118,119,129,131,139];
  case 131:
          return [119,120,130];
  case 132:
          return [122,123,133];
  case 133:
          return [123,124,132,134];
  case 134:
          return [124,125,133,135];
  case 135:
          return [125,126,134,136];
  case 136:
          return [126,127,135,137];
  case 137:
          return [127,128,136,138];
  case 138:
          return [128,129,137,139,];
  case 139:
          return [129,130,138];
}
}

function Connections(x, color) {
  var touching = Touching(x);
  var connections = [];
  for(var i = 0; i<touching.length; i++){
    if(state[touching[i]]==color){
      connections.push(touching[i]);
    }
  }
  return connections;
}

function findPath(x,y, color) {
  var path = [x];
  var val = 0;
  while(val < path.length){
    var more = Connections(path[val], color);
    for (var i = 0; i < more.length; i++){
      if(!path.includes(more[i])){
        path.push(more[i]);
      }
    }
    if(path.includes(y))
    {
      return true;
    }
    val++
  }
  return false;
}

function checkWin() {
  if(findPath(0,139, "-1")||findPath(18,121, "-1")){
    return "white"
  }
    if(findPath(4,135, "1")||findPath(8,131, "1")){
      return "black"
    }
  return "none"
}
