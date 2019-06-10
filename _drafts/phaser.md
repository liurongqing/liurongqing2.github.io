## Utils

### Phaser.Utils.Array.BringToTop

> 数组中值放至最后面

```javascript
var data = ['a', 'b', 'c']
Phaser.Utils.Array.BringToTop(data, 'a')
// ['b', 'c', 'a']
```

### Phaser.Utils.Array.Range

> 数组值的组合，a、b 为固定键

```javascript
var a = ['a', 'b', 'c']
var b = [1, 2]
Phaser.Utils.Array.Range(a, b)
// ['b', 'c', 'a']
```

### Phaser.Utils.Array.Matrix

> 矩阵数组（二维数组）

- Phaser.Utils.Array.Matrix.MatrixToString

> 打印矩阵

```javascript
var matrix = [[1, 2, 3], [1, 2, 3]]
console.log(Phaser.Utils.Array.Matrix.MatrixToString(matrix))
```

- Phaser.Utils.Array.Matrix.ReverseColumns

> 纵向反序

```javascript
var matrix = [[1, 2, 3], [1, 2, 3]]
Phaser.Utils.Array.Matrix.ReverseColumns(matrix)
```

- Phaser.Utils.Array.Matrix.ReverseRows

> 横向反序

```javascript
var matrix = [[1, 2, 3], [1, 2, 3]]
Phaser.Utils.Array.Matrix.ReverseRows(matrix)
```


- Phaser.Utils.Array.Matrix.Rotate180

> 纵横向反序【向左滚动180度】

```javascript
var matrix = [[1, 2, 3], [1, 2, 3]]
Phaser.Utils.Array.Matrix.Rotate180(matrix)
```

- Phaser.Utils.Array.Matrix.RotateLeft

> 横变纵+纵反序 + 横正序【向左滚动90度】

```javascript
var matrix = [[1, 2, 3], [1, 2, 3]]
Phaser.Utils.Array.Matrix.RotateLeft(matrix)
```

- Phaser.Utils.Array.Matrix.RotateRight

> 横变纵+纵正序+横反序【向右滚动90度】

```javascript
var matrix = [[1, 2, 3], [1, 2, 3]]
Phaser.Utils.Array.Matrix.RotateRight(matrix)
```

- Phaser.Utils.Array.Matrix.TransposeMatrix

> 纵横交换

```javascript
var matrix = [[1, 2, 3], [1, 2, 3]]
Phaser.Utils.Array.Matrix.TransposeMatrix(matrix)
```



## 文本操作

1. 添加文本、设置文本

    ```javascript
    var text = this.add.text(10, 10, "Click to reverse the array matrix rows", {
        font: "16px Courier",
        fill: "#ffffff"
    });
    text.setText('set text')
    
    ```


## 输入监听

1. 点击操作

    ```javascript
    this.input.on("pointerup", function() {
        alert('点击')
    });
    ```
