return {
  dir = "~/Documents/GitHub/sui-move-lsp",
  dependencies = {
    "neovim/nvim-lspconfig",
    "nvim-treesitter/nvim-treesitter",
  },
  event = "VeryLazy",
  ft = "move", -- Lazy load on .move files
}
