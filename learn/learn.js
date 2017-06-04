/** sentry(des,arr): 哨兵模式的顺序表查找
 * binarySearch(des,arr): 折半查找
 * bubbleSort(arr): 冒泡排序
 * selectSort(arr): 简单选择排序
 * quickSort(arr): 快速排序
 * swap(arr,a,b): 交换数组的a,b的值
 **/

function sentry(des, arr) {
  if (!(arr instanceof Array))
    return "arr is not array";
  var i;
  arr[0] = des;
  i = arr.length;
  while (arr[i] != des) {
    i--;
  }
  return i;
}

function binarySearch(des, arr) {
  if (!(arr instanceof Array))
    return "arr is not array";
  var low = 0;
  var high = arr.length;
  var mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] < des) {
      low = mid + 1;
    } else if (arr[mid] > des) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return 0;
}

function bubbleSort(arr) {
  if (!(arr instanceof Array))
    return "arr is not array";
  var flag = true;
  for (var i = 0; i < arr.length - 1 && flag; i++) {
    flag = false;
    for (var j = arr.length - 1; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        flag = true;
      }
    }
  }
  return arr;
}

function selectSort(arr) {
  if (!(arr instanceof Array))
    return "arr is not array";
  for (var i = 0; i <= arr.length - 1; i++) { //这里是否加=
    var min = i;
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[min] > arr[j])
        min = j;
    }
    if (i != min) {
      swap(arr, i, min)
    }
  }
  return arr;
}

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

function qsort(arr, low, high) {
  var pivot;
  if (low < high) {
    pivot = Partition(arr, low, high)
    this.qsort(arr, low, pivot - 1);
    this.qsort(arr, pivot + 1, high)
  }
}

function Partition(arr, low, high) {
  var pivotkey = arr[low];
  while (low < high) {
    while (low < high && arr[high] >= pivotkey)
      high--;
    swap(arr, low, high)
    while (low < high && arr[low] <= pivotkey)
      low++;
    swap(arr, low, high)
  }
  return low;
}

function quickSort(arr) {
  if (!(arr instanceof Array))
    return "arr is not array";
  this.qsort(arr, 0, arr.length - 1);
  return arr;
}