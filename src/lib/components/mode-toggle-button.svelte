<script lang="ts">
  import { Sun, Moon } from 'radix-icons-svelte'
  import { setMode, resetMode } from 'mode-watcher'
  import { Button } from '$lib/components/ui/button'
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline" size="icon">
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Label>Cambiar tema</DropdownMenu.Label>
    <DropdownMenu.Item on:click={() => setMode('light')}>Claro</DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => setMode('dark')}>Oscuro</DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => resetMode()}>Sistema</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
