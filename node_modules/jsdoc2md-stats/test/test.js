'use strict'
const TestRunner = require('test-runner')
const stats = require('../')
const a = require('assert')

const runner = new TestRunner()

function JsdocToMarkdown () {}
JsdocToMarkdown.prototype.render = function () {
  return Promise.resolve('test')
}

const jsdoc2md = new (stats(JsdocToMarkdown, '0.0.0'))()

runner.test('decorated correctly', function () {
  jsdoc2md.render()
    .then(function (output) {
      a.ok(jsdoc2md._usage)
    })
})
