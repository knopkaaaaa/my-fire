function calculation()

{
var A = parseInt(document.getElementById('A').value)
var B = parseInt(document.getElementById('B').value)
var nums = [];
	
for (i = A; i <= B; i++)		
{
			
	for (j = 0; j < i; j++) 
	{
		nums.push(i);
	}
}		
document.getElementById('res').innerHTML += " "+nums.join(", ");

}
