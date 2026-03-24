return {
  dir = "~/Documents/GitHub/sui-move-lsp",
  event = "VeryLazy",  -- Load early so icons register before file explorers
  ft = "move",         -- Also load when opening .move files
  dependencies = { "nvim-tree/nvim-web-devicons" },
  init = function()
    -- Register filetype detection for .move files
    vim.filetype.add({
      extension = {
        move = "move",
      },
    })
  end,
  config = function()
    -- Setup tree-sitter queries (installs from repo)
    require("sui-move-lsp.treesitter").setup()

    -- Setup LSP configuration
    require("sui-move-lsp.lsp").setup()

    -- Setup file icons (water droplet icon for .move files)
    require("sui-move-lsp.icons").setup()
  end,
}
