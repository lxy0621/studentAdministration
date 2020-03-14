

$(function () {
    //新增数据
    $('.addSave').click(function () {
        var classNumber = $('#classNumber').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var age = $('#age').val();
        var native = $('#native').val();
        var address = $('#address').val();
        var phone = $('#phone').val();
        var job = $('#job').val();

        if (classNumber === '' || name === '') {

            alert('学号与姓名不能为空')

            return;
        }

        var data = localStorage.getItem('studentMessage');

        if (data == null) {
            localStorage.setItem('studentMessage', JSON.stringify(
                [
                    {
                        classNumber: classNumber,
                        name: name,
                        gender: gender,
                        age: age,
                        native: native,
                        address: address,
                        phone: phone,
                        job: job
                    }
                ]
            ))
        } else {
            data = JSON.parse(data);
            data.push(
                {
                    classNumber: classNumber,
                    name: name,
                    gender: gender,
                    age: age,
                    native: native,
                    address: address,
                    phone: phone,
                    job: job
                }
            );
            localStorage.setItem('studentMessage', JSON.stringify(data));
        }
        $('.listui').empty();
        $('.editui').empty();

        $('#classNumber').val('');
        $('#name').val('');
        $('#gender').val('');
        $('#age').val('');
        $('#native').val('');
        $('#address').val('');
        $('#phone').val('');
        $('#job').val('');

        showData();
        showEditData();
    })

    // 获取数据
    function getData() {
        var data = localStorage.getItem('studentMessage');
        data = JSON.parse(data);
        return data;
    }
    getData();

    //渲染列表页面
    function showData() {

        var data = getData();
        $.each(data, function (i, ele) {
            $('<li><span>' + ele.classNumber + '</span><span>' + ele.name + '</span><span>' + ele.gender + '</span><span>' + ele.age + '</span><span>' + ele.native + '</span><span>' + ele.address + '</span><span>' + ele.phone + '</span><span>' + ele.job + '</span></li>')
                .appendTo('.listui');
        })

    }
    showData()

    // 渲染编辑页面
    function showEditData() {
        var data = getData();
        $.each(data, function (i, ele) {
            $('<li value="' + i + '"><span>' + ele.classNumber + '</span><span>' + ele.name + '</span><span>' + ele.gender + '</span><span>' + ele.age + '</span><span>' + ele.native + '</span><span>' + ele.address + '</span><span>' + ele.phone + '</span><span>' + ele.job + '</span><span><a type="edit" href="javascript:;">编辑</a>&nbsp<a type="delete" href="javascript:;">删除</a></span></li>')
                .appendTo('.editui');

        })
    }
    showEditData();


    //删除
    function Delete() {
        $('body').on('click', 'a[type="delete"]', function () {

            if (confirm('确定删除该生信息?')) {
                var i = $(this).parent().parent('li').val();
                var data = getData();
                data.splice(i, 1);
                localStorage.setItem('studentMessage', JSON.stringify(data));

                $('.listui').empty();
                $('.editui').empty();
                showData();
                showEditData();
            } else {
                return;
            }
        })
    }
    Delete();

    //编辑
    function Edit() {
        $('body').on('click', 'a[type="edit"]', function () {
            $('.editNewsbox').css('display', 'block');
            $('.zzc').css('display', 'block');

            var data = getData();

            var i = $(this).parent().parent('li').val();


            $('.classNumber').val(data[i].classNumber);
            $('.name').val(data[i].name)
            $('.gender').val(data[i].gender)
            $('.age').val(data[i].age)
            $('.native').val(data[i].native)
            $('.address').val(data[i].address)
            $('.phone').val(data[i].phone)
            $('.job').val(data[i].job)

            $('.editSave').click(function () {

                data[i].classNumber = $('.classNumber').val();
                data[i].name = $('.name').val();
                data[i].gender = $('.gender').val();
                data[i].age = $('.age').val();
                data[i].native = $('.native').val();
                data[i].address = $('.address').val();
                data[i].phone = $('.phone').val();
                data[i].job = $('.job').val();

                localStorage.setItem('studentMessage', JSON.stringify(data));

                $('.listui').empty();
                $('.editui').empty();
                showData();
                showEditData();
            })

        })
    }
    Edit();
    //获取时间
    function todoDate() {
        var datetime = new Date();
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute;
    }
    todoDate();

    //备忘录
    $('#todoSave').click(function () {

        var todoTitle = $('#todoTitle').val();
        var todoContent = $('#todoContent').val();
        var todoTime = todoDate();

        if (todoTitle === '' || todoContent === '') {

            alert('标题或内容不能为空');

            return;
        }

        var data = localStorage.getItem('todoList');

        if (data == null) {

            localStorage.setItem('todoList', JSON.stringify(
                [
                    {
                        todoTitle: todoTitle,
                        todoContent: todoContent,
                        todoTime: todoTime
                    }
                ]
            ))

        } else {
            data = JSON.parse(data);
            data.push(
                {
                    todoTitle: todoTitle,
                    todoContent: todoContent,
                    todoTime: todoTime
                }
            );

            localStorage.setItem('todoList', JSON.stringify(data));
        }

        $('#todoTitle').val('');
        $('#todoContent').val('');

        $('.doui').empty();
        showtodoListData()

    })

    //获取备忘录数据
    function gettodoListData() {
        var data = localStorage.getItem('todoList');
        data = JSON.parse(data);
        return data;
    }

    gettodoListData();

    //渲染列表页面
    function showtodoListData() {

        var data = gettodoListData();
        $.each(data, function (i, ele) {
            $('<li value="' + i + '"><span>《' + ele.todoTitle + '》</span><span>' + ele.todoContent + '</span><span>备忘录发布于：' + ele.todoTime + ' <a type="todoDelete" href="javascript:;">删除</a></span></li>')
                .appendTo('.doui');
        })

    }
    showtodoListData();

    //备忘录删除
    function DeletetodoList() {
        $('body').on('click', 'a[type="todoDelete"]', function () {

            if (confirm('确定删除该记录吗?')) {
                var i = $(this).parent().parent('li').val();
                var data = gettodoListData();
                data.splice(i, 1);
                localStorage.setItem('todoList', JSON.stringify(data));

                $('.doui').empty();
                showtodoListData()
            } else {
                return;
            }
        })
    }
    DeletetodoList();


    //系统设置
    //清空学生信息列表


    //清空备忘录列表
    function deletedoListMessage() {

        $('.deletedoListMessage').click(function () {
            if (confirm('确定删除?')) {
                var data = localStorage.getItem('todoList');
                if (data == null) {
                    alert('备忘录数据为空')
                } else {
                    localStorage.removeItem('todoList');
                    $('.doui').empty();
                    showtodoListData()
                }
            } else {
                return;
            }
        })

    }
    deletedoListMessage()

    //清空学生列表
    function deleteStuMessage() {

        $('.deleteStuMessage').click(function () {

            if (confirm('确定删除?')) {

                var data = localStorage.getItem('studentMessage');
                
                if (data == null) {
                    alert('学生数据为空')
                } else {
                    localStorage.removeItem('studentMessage');
                    $('.doui').empty();
                    showtodoListData()

                    $('.listui').empty();
                    $('.editui').empty();
                    showData();
                    showEditData();
                }
            } else {
                return;
            }
        })

    }
    deleteStuMessage()


})