/**
 * Created by Mark on 7/6/2016.
 */
process.stderr.write('error')
process.stdout.write('info')
//process.stdin.encoding='utf-8'
//process.stdin.on('data',function(data){
//    console.log(data.toString())
//})
//console.encoding='utf-8'
/*
process.stdin.on('readable',function(){
    var data =process.stdin.read()
    console.log(data.toString())
})
*/
console.log(__dirname)//js 文件所在目录
console.log(process.cwd())//命令执行时的目录