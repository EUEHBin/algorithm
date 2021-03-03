/**
 * 插入排序（Insertion Sort）
 *
 * 定义：
 * 插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。
 * 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，
 * 找到相应位置并插入
 *
 * 原理：
 * 1、从第一个元素开始，该元素可以认为已经被排序；
 * 2、取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 3、如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * 4、重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 5、将新元素插入到该位置后；
 * 重复步骤2~5
 */
function insertionSort(array) {
    let preIndex, current; // 前一个元素，当前值

    for (let i = 1; i < array.length; i++) {
        // 前一个元素位置
        preIndex = i - 1;
        // 当前元素值
        current = array[i];
        // 如果前一个元素的位置不小于0且当前元素值小于前一个元素值
        while (preIndex >= 0 && current < array[preIndex]) {
            // 将当前位置的数值赋值为前一个元素数值
            array[preIndex + 1] = array[preIndex];
            // 位置前移
            preIndex--;
        }
        // 当不满足while中条件时，将当前元素值（array[i]）赋值到插入位置
        array[preIndex + 1] = current;
    }
    return array
}

