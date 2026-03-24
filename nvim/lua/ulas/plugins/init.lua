return {
  "nvim-lua/plenary.nvim", -- lua functions that many plugins use
  "christoomey/vim-tmux-navigator", -- tmux & split window navigation
  "numToStr/Comment.nvim",
  {
    "mg979/vim-visual-multi",
    init = function()
      vim.g.VM_default_mappings = 0 -- Disable default mappings
      vim.g.VM_maps = {
        ["Find Under"] = "",
      }
      vim.g.VM_add_cursor_at_pos_no_mapping = 1
    end,
  },
}
