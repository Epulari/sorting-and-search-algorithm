/**
 * Created by Epulari T on 2018/8/7.
 */

/**
 *选择排序
 *依次选出数组最小的数并放到新数组中，新数组为有序数组
 *
 * @para = arr 数组
 */
function SelectionSort(arr) {
	var len = arr.length;
	if (len < 2) {
		return;
	}
	//存放排列好的数组
	var newarr = [];
	//外层循环：一轮比较。每次从首元素开始，每一次结束后都会减少一个元素
	for (var i = 0; i < len; len--) {
		//永远假设首元素值最小，min永远代表最小值，index为其下标
		var min = arr[0];
		var index = 0;
		//将每个元素与最小值进行比较，min永远代表最小值
		for(var j = 1; j < len; j++) {
			if (min > arr[j]) {
				min = arr[j];
				index = j;
			}
		}
		//将最小的元素追加到新数组，并从原数组中删去
		newarr.push(min);
		arr.splice(index, 1);

		console.log(newarr);
	}
	return newarr;
}

var arr = [7, 26, 53, 22, 32, 28, 38, 23, 24, 54, 27, 78, 33];
console.log("选择排序1:");
SelectionSort(arr);

/**
 * result
[ 7 ]
[ 7, 22 ]
[ 7, 22, 23 ]
[ 7, 22, 23, 24 ]
[ 7, 22, 23, 24, 26 ]
[ 7, 22, 23, 24, 26, 27 ]
[ 7, 22, 23, 24, 26, 27, 28 ]
[ 7, 22, 23, 24, 26, 27, 28, 32 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33, 38 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33, 38, 53 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33, 38, 53, 54 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33, 38, 53, 54, 78 ]
 */

/**
 *选择排序
 *假设首元素为最小值，依次与后面的元素值进行比较，首元素大的则交换元素值，一轮结束后首元素
 *
 * @para = arr 数组
 */
function SelectionSort2(arr) {
	var len = arr.length;
	if (len < 2) {
		return;
	}
	//外层循环：一轮比较。从前到后依次假设元素为最小值，依次与后面的元素值进行比较并交换，则数组从前到后依次变得有序
	for(var i = 0; i < len - 1; i++) {
		//内层循环：依次与待比较元素的值比较并交换
		var temp = arr[i];
		for (var j = i + 1; j < len; j++) {
			if(arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		console.log(arr);
	}
	return arr;
}

var arr = [7, 26, 53, 22, 32, 28, 38, 23, 24, 54, 27, 78, 33];
console.log("选择排序2:");
SelectionSort2(arr);

/**
 * result
[ 7, 26, 53, 22, 32, 28, 38, 23, 24, 54, 27, 78, 33 ]
[ 7, 22, 53, 26, 32, 28, 38, 23, 24, 54, 27, 78, 33 ]
[ 7, 22, 23, 53, 32, 28, 38, 26, 24, 54, 27, 78, 33 ]
[ 7, 22, 23, 24, 53, 32, 38, 28, 26, 54, 27, 78, 33 ]
[ 7, 22, 23, 24, 26, 53, 38, 32, 28, 54, 27, 78, 33 ]
[ 7, 22, 23, 24, 26, 27, 53, 38, 32, 54, 28, 78, 33 ]
[ 7, 22, 23, 24, 26, 27, 28, 53, 38, 54, 32, 78, 33 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 53, 54, 38, 78, 33 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33, 54, 53, 78, 38 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33, 38, 54, 78, 53 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33, 38, 53, 78, 54 ]
[ 7, 22, 23, 24, 26, 27, 28, 32, 33, 38, 53, 54, 78 ]
 */