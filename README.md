## File Structure
**Csharp-SortSearch:** Use c# to implement sorting and lookup algorithms.  
**sort:** Use javascript to implement search algorithms.  
**search:** Use javascript to implement sorting algorithms.  

# 排序和查找算法
**[排序算法](#sort)：**[冒泡排序](#bubble_sort) [快速排序](#quick_sort) [插入排序](#insertion_sort) [希尔排序](#shell_sort) [选择排序](#selection_sort) [堆排序](#heap_sort) [归并排序](#merge_sort) [计数排序](#counting_sort) [桶排序](#bucket_sort) [基数排序](#radix_sort)  
**[查找算法](#search)：**顺序查找(#sequence_search) 二分查找(#binary_search) 插值查找(#interpolation_search) 分块查找(#block_search) 二叉树查找(#binary_tree_search)  

## <a id="sort">排序算法</a>
排序算法 | 平均时间复杂度 | 最好情况 | 最坏情况 | 空间复杂度（辅助空间） | 排序方式 | 基本思想 | 稳定性
---- | ---- | ---- | ---- | ---- | ---- | ---- | ----
[冒泡排序](#bubble_sort) | O(n<sup>2</sup>) | O(n) | O(n<sup>2</sup>) | O(1) | In-place | 交换排序 | 稳定
[快速排序](#quick_sort) | O(nlogn) | O(nlogn) | O(n<sup>2</sup>) | O(nlogn) | In-place | 交换排序 | 不稳定
[插入排序](#insertion_sort) | O(n<sup>2</sup>) | O(n) | O(n<sup>2</sup>) | O(1) | In-place | 插入排序 | 稳定
[希尔排序](#shell_sort) | O(n<sup>1.3</sup>) | O(n) | O(n<sup>2</sup>) | O(1) | In-place | 插入排序 | 不稳定
[选择排序](#selection_sort) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) | In-place | 选择排序 | 不稳定
[堆排序](#heap_sort) | O(nlogn) | O(nlogn) | O(nlogn) | O(1) | In-place | 选择排序 | 不稳定
[归并排序](#merge_sort) | O(nlogn) | O(nlogn) | O(nlogn) | O(n) | Out-place | 分治法 | 稳定
[计数排序](#counting_sort) | O(n+k) | O(n+k) | O(n+k) | O(k) | Out-place | 非比较排序 | 稳定
[桶排序](#bucket_sort) | O(n+k) | O(n+k) | O(n<sup>2</sup>) | O(n+k) | Out-place | 非比较排序 | 稳定
[基数排序](#radix_sort) | O(d(n+r)) | O(d(n+r)) | O(d(n+r)) | O(n+r) | Out-place | 非比较排序 | 稳定

**平均时间复杂度从低到高：**  
　　（1）计数排序O(n+k)、桶排序O(n+k)  
　　（2）基数排序O(d(n+r))  
　　（3）快速排序O(nlogn)、归并排序O(nlogn)、堆排序O(nlogn)、希尔排序O(nlogn)  
　　（4）插入排序O(n<sup>2</sup>)、冒泡排序O(n<sup>2</sup>)、选择排序O(n<sup>2</sup>)。  

**稳定排序：**  
　　计数排序、桶排序、基数排序、归并排序、插入排序、冒泡排序。  
**不稳定排序：**  
　　快速排序、堆排序、希尔排序、选择排序。  

**In-place：**  
　　in-place：内部排序，数据记录在内存中进行排序；只需用到O(1)的额外空间的排序。  
　　冒泡排序、快速排序、插入排序、希尔排序、选择排序。  
**Out-place：**  
　　外部排序，因排序数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存。  
　　归并排序、基数排序、计数排序、桶排序。  

### <a id="bubble_sort">冒泡排序 Bubble Sort</a>
**基本思想：**  
　　In-place、交换排序。  
　　比较相邻的两个数，如果前者比后者大，则进行交换，每一轮排序后最后一个元素必然是最大的数。（如果数是按列排列，则较大的数下沉，较小的数冒起来。）  
**算法步骤：**  
　　1) 比较第1个和第2个元素，如果前者比后者大，则交换它们；  
　　2) 在上面的结果上比较第2个和第3个元素，如果前者比后者大，则交换它们；  
　　3) 按照上面的方式依次比较相邻元素，完成后最后的元素是最大的数；  
　　4) 排除上面结果的最后一个元素后重复上面的过程，直到没有任何一对数字需要比较。  
**时间复杂度：**  
　　最佳情况：T(n) = O(n)，当输入的数据已经是正序时；  
　　最差情况：T(n) = O(n<sup>2</sup>)，当输入的数据是反序时；  
　　平均情况：T(n) = O(n<sup>2</sup>)；  
　　稳定性：稳定；  
　　空间复杂度：O(1)。  
[排序算法](#sort)

### <a id="quick_sort">快速排序 Quick Sort</a>
**基本思想：**  
　　In-place、交换排序。  
　　在待排序数据中选出一个元素（通常为第一个元素、最后一个元素或中间元素）作为基准，将其他元素与基准元素进行比较进而分成两部分，一部分比基准大，一部分比基准小；然后对这两部分分别按相同方法继续排列，直到每个部分只有1个数。  
　　事实上，快速排序通常明显比其他Ο(n log n) 算法更快，因为它的内部循环（inner loop）可以在大部分的架构上很有效率地被实现出来。由于快速排序速度快、效率高，因此它是处理大数据最快的排序算法之一。  
**算法步骤：**  
　　1) 选择数组中最后一个元素作为基准；  
　　2) 从头开始遍历数组，将每个数与基准数比较，小于基准数的元素不动，将大于基准数的元素放到基准数的后面；  
　　3) 分别对基准数前和后的元素进行1-2步操作，直到每部分只有1个元素（递归）。  
**时间复杂度：**  
　　最佳情况：T(n) = O(nlogn)，当输入的数据已经是正序时；  
　　最差情况：T(n) = O(n<sup>2</sup>)，当输入的数据是反序时；  
　　平均情况：T(n) = O(nlogn)；  
　　稳定性：不稳定；  
　　空间复杂度：O(nlogn)。  
[排序算法](#sort)

### <a id="insertion_sort">插入排序 Insertion Sort</a>
**基本思想：**  
　　In-place、插入排序。  
　　扑克牌整理牌的顺序方式。一组乱序数据，设定前一半是已排好序的数，将剩余的数依次在已排好序的数中从后向前扫描找到对应位置并插入，如果待插入的元素与有序序列中的某个元素相等，则插入到相等元素后面。这个算法需要反复把已排好顺序的元素逐步向后挪动，为新元素提供插入空间。  
**算法步骤：**  
　　1) 认为第1个元素是已排好序的数；  
　　2) 取出第2个数，与第1个数（已排序数）比较，如果待排元素小于已排序数，则将已排序数向后移位，将待排元素放到已排序数的位置，否则不变；  
　　3) 取出下一个元素，与已排序数从后向前依次比较，如果待排元素小于已排序数，则将已排序数向后移位，直到待排元素大于或等于某已排元素，则将待排元素放入到该元素后的空位；  
　　4) 重复上一步骤，直到完成排序。  
**时间复杂度：**  
　　最佳情况：T(n) = O(n)，当输入的数据已经是正序时；  
　　最差情况：T(n) = O(n<sup>2</sup>)，当输入的数据是反序时；  
　　平均情况：T(n) = O(n<sup>2</sup>)；  
　　稳定性：稳定；  
　　空间复杂度：O(1)。  
[排序算法](#sort)

### <a id="shell_sort">希尔排序 Shell Sort</a>
**基本思想：**  
　　In-place、插入排序。  
　　第一个突破O(n<sup>2</sup>)的排序算法；是简单插入排序的改进版，与插入排序的不同处在于，它是优先比较距离较远的元素。希尔排序又被称作缩小增量排序/递减增量排序算法。  
　　在要排序的一组数中，根据某一增量分为若干子序列，对子序列分别进行插入排序。逐渐减小增量并重复上诉过程，直至增量为1，此时序列基本有序，最后进行插入排序。  
**算法步骤：**  
　　1) 取一个增量k，每隔k个数的元素组成一个子序列，则原数组分成干子序列；  
　　2) 在子序列中进行插入排序，子序列顺序的改变，导致原数组下标对应的元素值改变了；  
　　3) 减小增量k，重复上述步骤，直至k为1，再进行一次插入排序则完成排序。  
**时间复杂度：**  
　　最佳情况：T(n) = O(n)；  
　　最差情况：T(n) = O(n<sup>2</sup>)；  
　　平均情况：T(n) = O(n<sup>1.3</sup>)；  
　　稳定性：不稳定；  
　　空间复杂度：O(1)。  
[排序算法](#sort)

### <a id="selection_sort">选择排序 Selection Sort</a>
**基本思想：**  
　　In-place、选择排序。  
　　依次选出数组最小的数进行重新排列构建为有序数组。  
**算法步骤：**  
　　1) 初始有待排序列和空序列；  
　　2) 假设待排序列第一个元素为最小值，从第二个元素开始依次与之比较和交换，找到数组中的最小值，追加到空序列中；  
　　3) 重复第二步，直到所有元素均排序完毕。  
**时间复杂度：**  
　　最佳情况：T(n) = O(n<sup>2</sup>)；  
　　最差情况：T(n) = O(n<sup>2</sup>)；  
　　平均情况：T(n) = O(n<sup>2</sup>)；  
　　稳定性：不稳定；  
　　空间复杂度：O(1)。  
[排序算法](#sort)

### <a id="heap_sort">堆排序 Heap Sort</a>
**基本思想：**  
　　In-place、选择排序。  
　　利用堆这种数据结构所设计的一种排序算法。  
　　数组从左至右与堆从上到下从左至右一一对应。堆是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右子节点的值，称为大顶堆；或者每个节点的值都小于或等于其左右子节点的值，称为小顶堆。  
　　大顶堆：arr[i] (父节点) &gt;= arr[2i+1] (左子节点) &amp;&amp; arr[i] &gt;= arr[2i+2] (右子节点)   
　　小顶堆：arr[i] (父节点) &lt;= arr[2i+1] (左子节点) &amp;&amp; arr[i] &lt;= arr[2i+2] (右子节点)   
**算法步骤：**  
　　1) 构造初始堆。将给定无序序列构造成一个大顶堆（一般升序采用大顶堆，降序采用小顶堆)：从最后一个非叶子结点开始（叶结点自然不用调整，第一个非叶子结点 arr.length/2-1），从左至右，从下至上进行调整;  
　　2) 将堆顶元素与末尾元素进行交换，使末尾元素最大；  
　　3) 重复上述步骤，直到整个序列有序。  
**时间复杂度：**  
　　最佳情况：T(n) = O(nlogn)；  
　　最差情况：T(n) = O(nlogn)；  
　　平均情况：T(n) = O(nlogn)；  
　　稳定性：不稳定；  
　　空间复杂度：O(1)。  
[排序算法](#sort)

### <a id="merge_sort">归并排序 Merge Sort</a>
**基本思想：**  
　　Out-place。  
　　该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。  
　　依次选出数组最小的数进行重新排列构建为有序数组。先使每个子序列有序，再使子序列段间有序，将已有序的子序列合并，得到完全有序的序列。  
**算法步骤：**  
　　1) 将数组根据len/2分成两个序列，直到每个序列只有一个元素;  
　　2) 将子序列进行比较合并，替代原父序列，直到还原成替换数组的序列，该序列有序。  
**时间复杂度：**  
　　最佳情况：T(n) = O(nlogn)；  
　　最差情况：T(n) = O(nlogn)；  
　　平均情况：T(n) = O(nlogn)；  
　　稳定性：稳定；  
　　空间复杂度：O(n)。  
[排序算法](#sort)

### <a id="counting_sort">计数排序 Counting Sort</a>
**基本思想：**  
　　Out-place、计数排序、非比较的排序算法。  
　　计数排序对一定量的整数排序时候的速度非常快，一般快于其他排序算法。但计数排序局限性比较大，只限于对整数进行排序。  
　　对于一个输入数组中的一个元素i，只要我们知道了这个数组中比i小的元素的个数x，那么我们就可以直接把i放到第（x+1）个位置，即i的索引为x（索引从0开始）。  
**算法步骤：**  
　　1) 找出数组中的最大值和最小值;  
　　2) 统计数组中每个值i的元素出现的次数，将其存入新数组的第i项；  
　　3) 从最小值开始依次计算小于该元素的元素个数x，则该元素在有序数组中的索引值为x  
或者：  
　　1) 找出数组中的最大值和最小值;  
　　2) 统计数组中每个值i的元素出现的次数，将其存入新数组的第i项；  
　　3) 将上面的数组根据索引i的值依次在新数组中展开索引i，其结果则为有序数组。  
**时间复杂度：**  
　　最佳情况：T(n) = O(n+k)；  
　　最差情况：T(n) = O(n+k)；  
　　平均情况：T(n) = O(n+k)；  
　　稳定性：稳定；  
　　空间复杂度：O(k)。  
[排序算法](#sort)

### <a id="bucket_sort">桶排序 Bucket Sort</a>
**基本思想：**  
　　Out-place、计数排序、非比较的排序算法。  
　　桶排序是计数排序的升级版。它利用了函数的映射关系（比较规则），高效与否的关键就在于这个映射函数的确定（计数排序可以看做函数映射关系为f(x)=x或f(x)=x-min）。  
　　假设输入由一个随机过程产生，该过程将元素一致地分布在区间[0，1)上。桶排序的思想就是把区间[0，1)划分成n个相同大小的子区间，或称桶，然后将n个输入数分布到各个桶中去。因为输入数均匀分布在[0，1)上，所以一般不会有很多数落在一个桶中的情况。为得到结果，先对各个桶中的数进行排序，然后按次序把各桶中的元素列出来即可。  
**算法步骤：**  
　　1) 建立一个函数的映射关系f(x)=ax+b等；  
　　2) 根据映射关系建立多个桶f(x)；  
　　3) 依次将数据放入对应桶中；  
　　4) 对桶内数据进行排序，可以继续使用桶排序，也可以使用其他排序；  
　　5) 依次输出各个桶内数据，即为有序序列。  
**时间复杂度：**  
　　最佳情况：T(n) = O(n+k)；  
　　最差情况：T(n) = O(n<sup>2</sup>)；  
　　平均情况：T(n) = O(n+k)；  
　　稳定性：稳定(但若桶内排序不稳定则整体不稳定)；  
　　空间复杂度：O(n+k)。  
[排序算法](#sort)

### <a id="radix_sort">基数排序 Radix Sort</a>
**基本思想：**  
　　Out-place、桶排序、非比较的排序算法、分配式排序。  
　　基数即指位数，基数排序即位数排序。  
　　基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。  
**算法步骤：**  
　　1) 根据最低位/最高位，建立规则创建多个桶，并为桶编好序号;  
　　2) 根据最低位/最高位，按规则将各个数据放入对应的桶中；  
　　3) 根据序号依次将桶内数据放回数组中；  
　　4) 根据上一位/下一位，建立新的规则重复上述步骤直到序列有序。  
例如，对数字进行排序（不含负数，如果是负数还要判定负号）：  
　　1) 创建10个桶，根据个位数依次放入对应的桶中;  
　　2) 根据序号依次将桶内数据放回数组中；  
　　3) 根据十位数、百位数等重复上述步骤，最后一次放回数组时序列有序。  
例如，对相同固定长度的字符串进行排序（只考虑全小写）：  
　　1) 根据26个字母创建26个桶，根据最后一个字母依次放入对应的桶中;  
　　2) 根据序号依次将桶内数据放回数组中；  
　　3) 根据倒数第二位字母、倒数第三位字母等重复上述步骤，最后一次放回数组时序列有序。  

　　以上的两个例子都是从低位优先（最低位优先(Least Significant Digit first, LSD)法），也可以高位优先（最高位优先(Most Significant Digit first, LSD)法）。  
**时间复杂度：**  
　　最佳情况：T(n) = O(d(n+r))；  
　　最差情况：T(n) = O(d(n+r))；  
　　平均情况：T(n) = O(d(n+r))；  
　　稳定性：稳定；  
　　空间复杂度：O(n+r)。  
[排序算法](#sort)

### 计数排序、桶排序、基数排序
　　我查阅了很多资料和例子，很多人都把这三者搞的混乱不清，有些人认为计数排序是桶排序，有些人认为桶排序是基数排序。  
　　我的理解是：  
　　**计数排序**就是计算比某个数小的元素总数的个数，因此总数个数加1就是该数的位置，当某数多次重复时要复杂一点。其实计数排序和桶排序在思想上没有关系，有关系的是实现过程，而且这个关系并不是必须的。  
　　在计数排序，思想中心是求出比某个数小的元素总数的个数，那么，怎么求这个总数个数呢？有多种方法，其中一种就是利用桶排序，根据数组最大值建立桶的个数，然后桶的序号即新数组的索引，它包含了原数组中所有值，因此只有值出现一次，新数组索引对应的值从0开始依次递增，这样就可以求出原数组每个值出现的次数，且值是按递增排列的，具体看上面计数排序中利用桶排序的思想进行排序的步骤，以及计数排序里的代码示例。  
　　**桶排序**是对所有数据进行分析并建立一定的函数关系（规则），然后根据该规则将数据放入对应桶中，再对每个桶内数据进行排序。  
　　因此，计数排序中的桶排序起到的作用是使元素值按顺序排列，因为桶序号代表元素值，而由于桶序号的唯一性和规则性，每个元素值只出现一次，且这个排列的顺序中不仅包含所有元素值，还有其他无关的值，而桶内元素代表无序序列相同值出现的次数。而对于桶排序，桶序号是与元素值有关的映射关系（其实计数排序也是与元素值有关的映射关系，如桶序号等于元素值，则映射关系为f(x)=x），桶内元素就是无序序列的元素值。  
　　**基数排序**的思想是按位数排列，不论是最高位优先法MSD，还是最低位优先法LSD，它的中心都是依次对数据的同一位进行规则建立，分配如桶，然后依次取出，当最后一位按规则入桶然后依次取出后，必然为有序数列。  
　　因此从上面分析来看，计数排序只是在实现其中心思想上使用了桶排序的方法，借用桶排序这种手段来实现计数排序的计数；桶排序是按一定规则对数据进行分类然后合并，可以说是一种分治法；而基数排序是建立在桶排序之上的，它的核心是对每一位（基数）进行桶排序。  
[排序算法](#sort)

## <a id="search">查找算法</a>
**查找算法分类：**  
　　1) 静态查找和动态查找；  
　　　　静态或者动态都是针对查找表而言的。动态表指查找表中有删除和插入操作的表。  
　　2) 无序查找和有序查找：  
　　　　无序查找：被查找数列有序无序均可；  
　　　　有序查找：被查找数列必须为有序数列。  

**简单查找：**顺序查找(#sequence_search) 二分查找(#binary_search) 插值查找(#interpolation_search) 分块查找(#block_search) 二叉树查找(#binary_tree_search) 斐波那契查找  
**数据结构查找：**2-3树查找 红黑树查找 哈希查找（散列函数）  
**搜索算法：**枚举算法 深度优先搜索 广度优先搜索 A*算法 回溯算法 蒙特卡洛树搜索 广度优先搜索 广度优先搜索  

### <a id="sequence_search">顺序查找 Sequence Search</a>
**基本思想：**  
　　插值查找，无序查找。  
　　也称线性查找，基本思想为依次扫描每个元素并与关键字比较。  
**算法步骤：**  
　　1) 依次扫描每个元素并与关键字比较。  
**时间复杂度：**  
　　查找失败时的查找长度：ASL = n+1；  
　　最佳情况：T(n) = O(1)；  
　　最差情况：T(n) = O(n)；  
　　平均情况：T(n) = O(n)。  
[查找算法](#search)

### <a id="binary_search">二分查找 Binary Search</a>
**基本思想：**  
　　有序查找。  
　　也称折半查找。元素必须是有序的，如果是无序的则要先进行排序操作。根据首尾元素的索引值将序列分成两半，再依次将中间值及子序列与关键字对比。  
　　对于静态查找表，一次排序后不再变化，折半查找能得到不错的效率。但对于需要频繁执行插入或删除操作的数据集来说，维护有序的排序会带来不小的工作量，那就不建议使用。  
**算法步骤：**  
　　1) 根据首尾元素的索引值将序列分成两个子序列，将中间值与关键字对比，若相等则返回结果；  
　　2) 若中间元素小于/大于关键字，则将关键字与左子序列/有序列比较；  
　　3) 重复1-2步骤，直到得到结果。  
**时间复杂度：**  
　　查找失败时的查找长度：ASL = logn + 1；  
　　最佳情况：T(n) = O(1)；  
　　最差情况：T(n) = O(logn)；  
　　平均情况：T(n) = O(logn)；  
　　空间复杂度：O(1)。  
[查找算法](#search)

### <a id="interpolation_search">插值查找 Interpolation Search</a>
**基本思想：**  
　　有序查找。  
　　插值查找是改进的折半查找，因此也是建立在有序序列之上的查找。它根据需要查询的值的渐进进行搜索，也即是根据离所求值的距离进行搜索。  
**算法步骤：**  
　　1) 根据公式mid=low+(high-low)*((key-arr[low])/(arr[high]-arr[low]))将序列分成两个子序列，将中间值与关键字对比，若相等则返回结果；  
　　2) 若中间元素小于/大于关键字，则将关键字与左子序列/有序列比较；  
　　3) 重复1-2步骤，直到得到结果。  
**时间复杂度：**  
　　最佳情况：T(n) = O(1)；  
　　平均情况：T(n) = O(logn)；  
　　空间复杂度：O(1)。  
[查找算法](#search)

### <a id="fibonacci_search">斐波那契查找 Fibonacci Search</a>
**基本思想：**  
　　有序查找。  
　　斐波那契查找是改进的折半查找，因此也是建立在有序序列之上的查找。它是根据斐波那契数列进行分割的。  
　　斐波那契数列又称黄金分割数列，它的值为1、1、2、3、5、8、13、21、34、……这个数列从第3项开始，每一项都等于前两项之和，随着斐波那契数列的递增，前后两个数的比值会越来越接近黄金分割比例数字0.618。在数学上，斐波纳契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=2，n∈N*）
**算法步骤：**  
　　1) 计算并保存一个斐波那契序列的数组，方便以后取值，F[1]=1，F[2]=1, F[n]=F[n]-1+F[n]-2（F[0]=0，不影响操作）；  
　　2) 把有序数组的长度扩充到F[k]-1（便于递归），k是满足条件的最小值，扩充的元素都是原序列最后一个元素；  
　　3) 根据公式mid=low+(F[K-1]-1)将序列分成两个子序列（则左序列为F[k-1]-1，右序列为F[k-2]-1，三者相加刚好为F[k]-1），将中间值与关键字对比，若相等则返回结果；  
　　4) 若中间元素小于/大于关键字，则将关键字与左子序列/有序列比较；  
　　5) 重复3-4步骤，直到得到结果。  
**时间复杂度：**  
　　最佳情况：T(n) = O(1)；  
　　平均情况：T(n) = O(logn)；  
　　空间复杂度：O(1)。  
[查找算法](#search)

### <a id="block_search">分块查找 Block Search</a>
**基本思想：**  
　　有序查找。  
　　分块查找又称索引顺序查找，它是顺序查找和折半查找的一种改进方法。  
　　将n个数据元素”按块有序”划分为m块（m ≤ n）。每一块中的结点不必有序，但块与块之间必须”按块有序”；然后对每块内进行查找。  
**算法步骤：**  
　　1) 首先将查找表分成若干块，在每一块中数据元素的存放是任意的，但块与块之间必须是有序的，即每一块中任一元素都必须小于它后面块中任一元素；  
　　2) 找出每块的最大值组成新序列，使用二分查找在新序列中找到key值属于哪一块；  
　　3) 在该块中使用任意查找方法进行查找。  
**时间复杂度：**  
　　平均情况：T(n) = O(logn)。  
[查找算法](#search)

### <a id="binary_tree_search">二叉树查找 Binary Tree Search</a>
**基本思想：**  
　　树表查找。  
　　构建二叉查找树，左子树小于根节点，右子树大于根节点。  
　　二叉查找树也叫二叉搜索树、二叉排序树，它是一棵空树，它是具有下列性质的二叉树:  
　　1) 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；  
　　2) 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；  
　　3) 任意节点的左、右子树也分别为二叉查找树。  
**算法步骤：**  
　　1) 将关键字与根节点对比，如果关键值与根节点相等，则返回该节点的索引，如果关键值小于根节点，则将之与左子节点对比，如果关键值大于根节点，则将之与右子节点对比；  
　　2) 若查找的节点为空，则不存在关键值。  
**时间复杂度：**  
　　最差情况：T(n) = O(n)；  
　　平均情况：T(n) = O(log<sup>1.39</sup>n)。  
[查找算法](#search)


