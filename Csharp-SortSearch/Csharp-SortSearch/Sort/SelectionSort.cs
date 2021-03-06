﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp_SortSearch.Sort
{
    /*
     * 功能
     * 选择排序
     * 依次选出数组最小的数并放到新数组中，新数组为有序数组
     * Epulari T 
     * 2018.8.7
     */
    class SelectionSort
    {
        /// <summary>
        /// 选择排序
        /// </summary>
        /// <param name="arr">数组</param>
        public void MySelectionSort(int[] arr)
        {
            int len = arr.Length;
            if (len < 2)
            {
                return;
            }
            //外层循环：一轮比较。从前到后依次假设元素为最小值，依次与后面的元素值进行比较并交换，则数组从前到后依次变得有序
            for (int i = 0; i < len - 1; i++)
            {
                //内层循环：依次与待比较元素的值比较并交换
                for (int j = i + 1; j < len; j++)
                {
                    int temp = arr[i];
                    if (arr[i] > arr[j])
                    {
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }

                //输出本轮排序结果，字符以空格间隔
                foreach (int k in arr)
                {
                    Console.Write(k + " ");
                }
                //换行，每轮为一行
                Console.WriteLine();
            }
        }
    }
}
