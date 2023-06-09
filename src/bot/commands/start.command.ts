import * as process from 'process'

import { Composer, Context, InputFile } from 'grammy'

import { StartMarkup } from '@/bot/markups/start.markup'
import { ContextUtils } from '@/helpers/context.utils'
import { Logger } from '@/helpers/logger.utils'

const composer = new Composer<Context>()

composer.use(StartMarkup)

composer.command('start', async (ctx) => {
  if (!ctx.chat?.id) return ctx.reply('❌ Erro ao iniciar o bot!')
  if (ctx.chat.type === 'supergroup') return

  Logger.debug(`Bot has been started by: ${ContextUtils.get_username(ctx)}`, 'START')

  await ctx.api.sendChatAction(ctx.chat.id, 'typing')

  const file = new InputFile(process.cwd() + '/src/assets/suely.gif')
  return ctx.replyWithAnimation(file, {
    caption:
      'Olá! Sou a <b>Suely</b> 🧚‍♀️ e estou aqui para te ajudar a encontrar o que você precisa! 🤗\n',
    reply_markup: StartMarkup,
    parse_mode: 'HTML',
  })
})

export default composer
