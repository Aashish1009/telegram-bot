const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))

bot.hears('hello', (ctx) => ctx.reply('hi'))
bot.hears('kya haal chaal', (ctx) => ctx.reply('sab badhiya'))
bot.hears('tell me about yourself', (ctx) => ctx.reply('im a bot of aashish kumar singh'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.command('stop', (ctx) => ctx.reply('ok'))


bot.launch()

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));