/**
 * 模板引擎
 *
 * @author 老雷<leizongmin@gmail.com>
 */
 

var template = require('./lib/template');
var advtemplate = require('./lib/advtemplate');
var filters = require('./lib/filters'); 
 
 
// 版本
exports.version = '0.0.3';
 
// 解析代码
exports.parse = template.parse;

// 编译函数
exports.compile = template.compile;

// 渲染函数
exports.render = template.render;

// 编译整套模板
exports.compileAll = advtemplate.compileAll;

// 高级渲染
exports.advRender = advtemplate.advRender;

// 内置函数
exports.filters = filters;

