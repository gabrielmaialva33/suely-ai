import { Context } from 'grammy'
import { Menu } from '@grammyjs/menu'

export const StartMarkup = new Menu<Context>('start')
  .text('🔎 Comandos', (ctx) =>
    ctx.reply(`<b>Me chame por Suely, por ex: Oi Suely</b>`, {
      parse_mode: 'HTML',
    })
  )
  .row()
  .url('📺 Canal', 'https://t.me/shitpostersunion')
  .url('👥 Grupo', 'https://t.me/shitpostersuniongp')
  .row()
  .url('➕ Me adicione em seu grupo', 'https://t.me/suely_ia_bot?startgroup=new')
  .row()
  .url('👔 Dono', 'https://t.me/mrootx')
