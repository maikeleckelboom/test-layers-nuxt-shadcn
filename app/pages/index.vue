<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../layers/ui/components/ui/dropdown-menu'
import {Button} from '../../layers/ui/components/ui/button'
</script>
<template>
  <div class="flex gap-2 m-2">
    <div>
      <Button variant="outline">
        Test Button
      </Button>
    </div>
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button>Test DropdownMenu with Button</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>