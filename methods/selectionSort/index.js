/**
 * 选择排序（Selection sort）
 *
 * 工作原理：
 * 1、第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
 * 2、然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。
 * 3、以此类推，直到全部待排序的数据元素的个数为零。选择排序是不稳定的排序方法
 */

function selectionSort(data) {
    // n个元素，循环n-1次即可
    for (let i = 0; i < data.length - 1; i++) {
        // 定义当前循环最小值的位置
        let minIndex = i;
        // 第i个元素需要与第i+1个元素开始比较，所以j从i+1开始
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) {// 找到最小的数
                minIndex = j;// 保存最小数索引
            }
        }
        // 交换位置
        let temp = data[i];
        data[i] = data[minIndex];
        data[minIndex] = temp;
    }

    return data;
}
