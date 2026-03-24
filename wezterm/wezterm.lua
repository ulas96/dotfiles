-- Pull in the wezterm API
local wezterm = require("wezterm")
local mux = wezterm.mux
local act = wezterm.action

-- This will hold the configuration.
local config = wezterm.config_builder()

-- ── Mux server (persist sessions like tmux) ────────────────────────────────
-- WezTerm runs a background mux server; closing the window doesn't kill panes.
-- Reconnect from CLI: wezterm connect unix
config.unix_domains = { { name = "unix" } }
config.default_gui_startup_args = { "connect", "unix" }

-- ── Default startup workspace ──────────────────────────────────────────────
wezterm.on("gui-startup", function(cmd)
	-- Only spawn if this is a fresh server (no existing windows)
	if #mux.all_windows() > 0 then return end
	local _, _, window = mux.spawn_window(cmd or { workspace = "main", cwd = wezterm.home_dir })
	window:gui_window():maximize()
end)

-- ── Key bindings (tmux-style) ──────────────────────────────────────────────
config.keys = {
	-- Split right
	{ key = "\\", mods = "CTRL", action = act.SplitPane { direction = "Right", size = { Percent = 50 } } },
	-- Split down
	{ key = "-", mods = "CTRL", action = act.SplitPane { direction = "Down", size = { Percent = 50 } } },

	-- Navigate panes (vim-style)
	{ key = "h", mods = "CTRL", action = act.ActivatePaneDirection "Left" },
	{
		key = "l",
		mods = "CTRL",
		action = wezterm.action_callback(function(win, pane)
			local proc = pane:get_foreground_process_info()
			if proc and proc.name:find("nvim") then
				-- Pass through to Neovim (opens nvim-tree on current file)
				win:perform_action(act.SendKey { key = "l", mods = "CTRL" }, pane)
			else
				win:perform_action(act.ActivatePaneDirection "Right", pane)
			end
		end),
	},
	{ key = "k", mods = "CTRL", action = act.ActivatePaneDirection "Up" },
	{ key = "j", mods = "CTRL", action = act.ActivatePaneDirection "Down" },

	-- Resize panes
	{ key = "H", mods = "CTRL|SHIFT|ALT", action = act.AdjustPaneSize { "Left", 5 } },
	{ key = "L", mods = "CTRL|SHIFT|ALT", action = act.AdjustPaneSize { "Right", 5 } },
	{ key = "K", mods = "CTRL|SHIFT|ALT", action = act.AdjustPaneSize { "Up", 5 } },
	{ key = "J", mods = "CTRL|SHIFT|ALT", action = act.AdjustPaneSize { "Down", 5 } },

	-- Zoom pane (tmux prefix + z)
	{ key = "z", mods = "CTRL|SHIFT", action = act.TogglePaneZoomState },

	-- New tab (tmux prefix + c)
	{ key = "t", mods = "CTRL|SHIFT", action = act.SpawnTab "CurrentPaneDomain" },
	-- Close pane (tmux prefix + x)
	{ key = "x", mods = "CTRL|SHIFT", action = act.CloseCurrentPane { confirm = true } },
	-- Next/prev tab (tmux prefix + n/p)
	{ key = "n", mods = "CTRL|SHIFT", action = act.ActivateTabRelative(1) },
	{ key = "p", mods = "CTRL|SHIFT", action = act.ActivateTabRelative(-1) },

	-- Workspace switcher (tmux prefix + s)
	{ key = "s", mods = "CTRL|SHIFT", action = act.ShowLauncherArgs { flags = "WORKSPACES" } },
	-- Cycle workspaces
	{ key = "[", mods = "CTRL|SHIFT", action = act.SwitchWorkspaceRelative(-1) },
	{ key = "]", mods = "CTRL|SHIFT", action = act.SwitchWorkspaceRelative(1) },
	-- Rename current tab
	{ key = ",", mods = "CTRL|SHIFT", action = act.PromptInputLine {
		description = "Rename tab:",
		action = wezterm.action_callback(function(_, pane, line)
			if line then pane:tab():set_title(line) end
		end),
	}},

	-- Toggle fullscreen
	{ key = "Enter", mods = "CMD", action = act.ToggleFullScreen },
}

-- This is where you actually apply your config choices

-- my coolnight colorscheme
config.colors = {
	foreground = "#CBE0F0",
	background = "#011423",
	cursor_bg = "#47FF9C",
	cursor_border = "#47FF9C",
	cursor_fg = "#011423",
	selection_bg = "#033259",
	selection_fg = "#CBE0F0",
	ansi = { "#214969", "#E52E2E", "#44FFB1", "#FFE073", "#0FC5ED", "#a277ff", "#24EAF7", "#24EAF7" },
	brights = { "#214969", "#E52E2E", "#44FFB1", "#FFE073", "#A277FF", "#a277ff", "#24EAF7", "#24EAF7" },

	tab_bar = {
		background = "#011423",

		active_tab = {
			bg_color = "#033259",
			fg_color = "#d79921",
			intensity = "Bold",
		},

		inactive_tab = {
			bg_color = "#011423",
			fg_color = "#458588",
		},

		inactive_tab_hover = {
			bg_color = "#021d3a",
			fg_color = "#CBE0F0",
		},

		new_tab = {
			bg_color = "#011423",
			fg_color = "#458588",
		},

		new_tab_hover = {
			bg_color = "#011423",
			fg_color = "#d65d0e",
		},
	},
}

config.font = wezterm.font("MesloLGS Nerd Font Mono")
config.font_size = 15

config.enable_tab_bar = true
config.use_fancy_tab_bar = false
config.tab_bar_at_bottom = true
config.hide_tab_bar_if_only_one_tab = true
config.window_padding = { left = 8, right = 8, top = 8, bottom = 0 }

config.term = "xterm-256color"

config.window_decorations = "RESIZE"
config.window_background_opacity = 0.75
config.macos_window_background_blur = 10

-- Add these settings to prevent immediate closing

-- and finally, return the configuration to wezterm
return config

