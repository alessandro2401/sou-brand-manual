# Plano de Implementação de Downloads - Manual da Marca SOU

## Arquivos Necessários

### 1. Baixar Logotipos (`logos_sou_portal.zip`)
**Conteúdo:**
- `PNG/`
  - `logo_completo.png` (transparente, 2000x2000px)
  - `logo_simbolo.png` (apenas quadrados, 1000x1000px)
  - `logo_horizontal.png` (logo + texto lado a lado)
  - `logo_vertical.png` (logo + texto empilhado)
  - `logo_fundo_escuro.png` (versão para fundos escuros)
  - `logo_fundo_claro.png` (versão para fundos claros)
- `SVG/`
  - `logo_completo.svg`
  - `logo_simbolo.svg`
  - `logo_horizontal.svg`
  - `logo_vertical.svg`
- `PDF/`
  - `logo_completo.pdf`
  - `logo_simbolo.pdf`

### 2. Baixar Paleta (`paleta_cores_sou.zip`)
**Conteúdo:**
- `paleta_sou.ase` (Adobe Swatch Exchange)
- `cores.css` (variáveis CSS)
- `cores.json` (JSON com HEX, RGB, CMYK)
- `guia_cores.pdf` (PDF com todas as cores e usos)

### 3. Baixar Manual PDF (`manual_marca_sou_v2.pdf`)
**Conteúdo:**
- PDF completo do manual com todas as seções
- Incluir: logo, conceito, valores, paleta, tipografia, tom de voz, variações

### 4. Baixar Assets (`assets_digitais_sou.zip`)
**Conteúdo:**
- `favicons/`
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon-180x180.png`
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`
  - `favicon.ico`
- `social/`
  - `avatar_circular_512x512.png`
  - `og_image_1200x630.png`
  - `linkedin_banner_1584x396.png`
  - `twitter_header_1500x500.png`
  - `facebook_cover_820x312.png`

## Arquivos Existentes no Projeto
```
assets/
├── business_card_correct.png
├── business_card_mockup.png
├── color_palette.png
├── logo_correct.png
├── logo_original.png
├── logo_principal.png
├── logo_sou_complete.png
├── logo_sou_final.png
├── logo_sou_v2.png
├── logo_sou_variations_correct.png
├── logo_symbolism.png
├── logo_variations.png
├── logo_variations_final.png
├── social_media_correct.png
├── social_media_profile.png
├── stationery_mockup.png
├── stationery_mockup_correct.png
├── symbolism_correct.png
└── typography_example.png
```

## Próximos Passos
1. Criar pasta `downloads/` no projeto
2. Gerar arquivos SVG dos logos
3. Criar arquivo ASE da paleta de cores
4. Gerar PDF do manual completo
5. Criar favicons e assets sociais
6. Zipar arquivos conforme estrutura
7. Implementar função de download no JavaScript
8. Testar todos os downloads
9. Commit e push para GitHub
10. Deploy no Vercel
