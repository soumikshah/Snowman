var yargs = require('yargs');
var game= require('Snowman');

var flags = yargs.usage('Usage node cli.js --run')
	.options('h',{
		alias: 'help',
		describe: 'Display Help.'
	})
	.options('r',{
		alias: 'run',
		describe: 'Run the CLI'
	})
	.argv;

if(flags.help){
		yargs.showHelp();
}
if(flags.run){
		game.run();
}