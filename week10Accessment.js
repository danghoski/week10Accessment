function spinalCase(str1)
 { return str1.replace(/^[\W_]+|[\W_]+$|([\W_]+)/g,
 	
function ($0, $1) { return $1 ? "-" : ""; }).replace(/([a-z])(?=[A-Z])/g, '$1-').toLowerCase(); } console.log(spinalCase("All The Small Things"));