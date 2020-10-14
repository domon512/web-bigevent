$(function() {
    var layer = layui.layer
    var $image = $('#image')
    const options = {
        aspecRatio: 1,
        preview: 'image-preview'
    }
    $image.cropper(options)
    $('#btnChooseImage').on('click', function() {
        $('#file').click()
        $('#file').on('change', function(e) {
            var filelist = e.target.files
            if (filelist.length === 0) {
                return layer.msg('请选择照片！')
            }
            var file = e.target.files[0]
            var imgURL = URL.createObjectURL(file)
            $image
                .cropper('destroy')
                .attr('src', imgURL)
                .cropper('options')
        })
        $('#btnUpload').on('click', function() {
            var dataURL = $image
                .cropper('getCroppedCanvas', {
                    width: 100,
                    heiht: 100
                })
                .toDataURL('image/png')

        })
    })
})