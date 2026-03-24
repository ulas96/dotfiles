return {
  "obsidian-nvim/obsidian.nvim",
  version = "*", -- use latest release, remove to use latest commit
  ft = "markdown",
  dependencies = {
    "nvim-lua/plenary.nvim",
  },
  keys = {
    -- Creating notes
    { "<leader>on", "<cmd>ObsidianNew<CR>", desc = "New note" },
    { "<leader>oN", "<cmd>ObsidianNewFromTemplate<CR>", desc = "New note from template" },

    -- Finding and navigating
    { "<leader>os", "<cmd>ObsidianSearch<CR>", desc = "Search notes" },
    { "<leader>of", "<cmd>ObsidianQuickSwitch<CR>", desc = "Quick switch note" },
    { "<leader>ob", "<cmd>ObsidianBacklinks<CR>", desc = "Backlinks" },
    { "<leader>oT", "<cmd>ObsidianTags<CR>", desc = "Search tags" },
    { "<leader>oc", "<cmd>ObsidianTOC<CR>", desc = "Table of contents" },
    { "<leader>og", "<cmd>ObsidianFollowLink<CR>", desc = "Follow link under cursor" },

    -- Daily notes
    { "<leader>ot", "<cmd>ObsidianToday<CR>", desc = "Today's daily note" },
    { "<leader>oY", "<cmd>ObsidianYesterday<CR>", desc = "Yesterday's daily note" },
    { "<leader>oM", "<cmd>ObsidianTomorrow<CR>", desc = "Tomorrow's daily note" },
    { "<leader>oD", "<cmd>ObsidianDailies<CR>", desc = "List daily notes" },

    -- Editing and linking
    { "<leader>od", "<cmd>ObsidianToggleCheckbox<CR>", desc = "Toggle checkbox" },
    { "<leader>ol", "<cmd>ObsidianLink<CR>", mode = "v", desc = "Link selection to note" },
    { "<leader>oL", "<cmd>ObsidianLinkNew<CR>", mode = "v", desc = "Link selection to new note" },
    { "<leader>oe", "<cmd>ObsidianExtractNote<CR>", mode = "v", desc = "Extract selection to note" },
    { "<leader>oi", "<cmd>ObsidianTemplate<CR>", desc = "Insert template" },
    { "<leader>or", "<cmd>ObsidianRename<CR>", desc = "Rename note" },
    { "<leader>op", "<cmd>ObsidianPasteImg<CR>", desc = "Paste image" },

    -- External
    { "<leader>oo", "<cmd>ObsidianOpen<CR>", desc = "Open in Obsidian" },
    { "<leader>ow", "<cmd>ObsidianWorkspace<CR>", desc = "Switch workspace" },
  },
  ---@module 'obsidian'
  ---@type obsidian.config
  opts = {
    legacy_commands = false, -- this will be removed in the next major release
    workspaces = {
      {
        name = "personal",
        path = "/Users/ulas/Documents/obsidian/",
      },
    },
  },
  config = function(_, opts)
    require("obsidian").setup(opts)

    local vault_path = "/Users/ulas/Documents/obsidian/"
    local group = vim.api.nvim_create_augroup("ObsidianGitSync", { clear = true })

    vim.api.nvim_create_autocmd("BufWritePost", {
      group = group,
      pattern = "*.md",
      callback = function(ev)
        local file = vim.api.nvim_buf_get_name(ev.buf)
        if not vim.startswith(file, vault_path) then return end
        vim.fn.jobstart(
          { "git", "add", file },
          {
            cwd = vault_path,
            on_exit = function(_, add_code)
              if add_code ~= 0 then return end
              vim.fn.jobstart(
                { "git", "commit", "-m", "auto: update " .. vim.fn.fnamemodify(file, ":t") },
                {
                  cwd = vault_path,
                  on_exit = function(_, commit_code)
                    if commit_code ~= 0 then return end
                    vim.fn.jobstart({ "git", "push" }, { cwd = vault_path })
                  end,
                }
              )
            end,
          }
        )
      end,
    })
  end,
}
