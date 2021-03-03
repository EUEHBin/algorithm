/**
 * 冒泡排序（Bubble Sort）
 *
 * 定义：
 * 冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，
 * 如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，
 * 也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”
 * 到数列的顶端。
 *
 * 原理：
 * 1、比较相邻的元素，如果第一个比第二个大，就交换他们两个
 * 2、对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样最后的元素就是最大的数
 * 3、针对所有元素重复以上步骤（最后一个除外）
 * 4、持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较
 *
 * 部分定义出自：https://baike.baidu.com/item/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F/4602306?fr=aladdin
 *
 * @param data（待排序数组）
 * @returns {*} 排序好的数组
 */

function bubbleSort(data) {
    // n个数据，只需要循环n-1次就可完成排序
    for (let i = 0; i < data.length - 1; i++) {
        // 已经有i个数据排好顺序了，内部无需再循环，所以-i
        for (let j = 0; j < data.length - 1 - i; j++) {
            // 相邻元素对比，前一个比后一个大，交换位置
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }

    return data;
}
