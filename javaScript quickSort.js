//javaScript再学习
var arr=[2,25,4,24,5,5,32,24,5,13,96];
function quickSort(arr,left,right)
{
	if (left>=right) return;
	var leftPtr=left,
		rightPtr=right+1,
		currentNode=arr[leftPtr];
	while(true)
	{
		do{
			++leftPtr;
			}while(arr[leftPtr]<currentNode);
		do{
			--rightPtr;
		}while(arr[rightPtr]>currentNode);
		if (leftPtr>=rightPtr) break;
		var t=arr[leftPtr];
		arr[leftPtr]=arr[rightPtr];
		arr[rightPtr]=t;
	}
	var t2=arr[left];
	arr[left]=arr[rightPtr];
	arr[rightPtr]=t2;
	quickSort(arr,left,rightPtr-1);
	quickSort(arr,rightPtr+1,right);
}
    quickSort(arr,0,10);
	for(var i in arr)
		console.log(arr[i]);
