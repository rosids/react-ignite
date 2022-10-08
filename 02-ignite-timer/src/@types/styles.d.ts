// no nome do arquivo o d.ts significa que é uma definição de tipo no typescript
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// se passar o mouse por cima do defaultTheme na importação é possível ver que a tipagem das propriedades foram definidas de forma automática. Na linha 6 é inferido na variável ThemeType essa tipagem e quais propriedades existem.
type ThemeType = typeof defaultTheme

// cria uma tipagem para o módulo styled-components do npm. Como se quer adicionar uma nova tipagem e não criar uma do zero foi feita a importação do styled-components, assim ele continua tendo a tipagem padrão.
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
