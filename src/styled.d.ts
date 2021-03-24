import "styled-components"

import { Property } from "csstype"

type NamedColors = `white` | `Azure` | `green`

type NamedFontSizes = `title` | `task` | `button` | `description` | `date`

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            [key in NamedColors]: Property.Color
        }
        space: Array<number>
        fontSizes: {
            [key in NamedFontSizes]: Property.FontSize
        }
        sizes: Array<number>
    }
}