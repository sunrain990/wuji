var casper = require('casper').create();
casper.start('http://baidu.com/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://qq.com', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();