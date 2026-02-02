import { useState } from 'react'
import {
  PlusIcon,
  FolderIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  ChartBarIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/solid'
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Badge,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  List,
  ListItem,
  Sidebar,
  SidebarSection,
  SidebarItem,
  StatusIndicator,
  SearchBar
} from '../../components/ui'
import './ComponentDemo.css'


/**
 * ComponentDemo - A comprehensive showcase of all UI components
 *
 * This page demonstrates all available components with their variants,
 * sizes, states, and usage examples. Use this as a reference when
 * implementing components in your application.
 */
function ComponentDemo(): React.JSX.Element {
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = (): void => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="demo-app">
      <header className="demo-header">
        <h1>Component System</h1>
        <p>A reusable, dark-themed UI component library with CSS variables</p>
      </header>

      {/* Buttons Section */}
      <section className="demo-section">
        <h2>Buttons</h2>

        <h3>Variants</h3>
        <div className="demo-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>

        <h3>Sizes</h3>
        <div className="demo-row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <h3>With Icons</h3>
        <div className="demo-row">
          <Button variant="primary" leftIcon={<PlusIcon className="demo-icon demo-icon--sm" />}>
            New Project
          </Button>
          <Button variant="secondary" rightIcon={<PlusIcon className="demo-icon demo-icon--sm" />}>
            Add Item
          </Button>
        </div>

        <h3>States</h3>
        <div className="demo-row">
          <Button disabled>Disabled</Button>
          <Button isLoading={isLoading} onClick={handleLoadingDemo}>
            {isLoading ? 'Loading...' : 'Click to Load'}
          </Button>
          <Button variant="primary" fullWidth>
            Full Width Button
          </Button>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="demo-section">
        <h2>Inputs & Search</h2>

        <div className="input-demo-grid">
          <div>
            <h3>Basic Input</h3>
            <Input placeholder="Enter your name..." fullWidth />
          </div>

          <div>
            <h3>With Icons</h3>
            <Input
              placeholder="Search..."
              leftIcon={<FolderIcon className="demo-icon demo-icon--lg" />}
              fullWidth
            />
          </div>

          <div>
            <h3>With Error</h3>
            <Input placeholder="Email" error="Invalid email address" fullWidth />
          </div>

          <div>
            <h3>Disabled</h3>
            <Input placeholder="Disabled input" disabled fullWidth />
          </div>
        </div>

        <h3>Search Bar</h3>
        <div className="demo-row">
          <SearchBar
            placeholder="Search projects..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onClear={() => setSearchValue('')}
            shortcut="⌘K"
            fullWidth
          />
        </div>
      </section>

      {/* Badges Section */}
      <section className="demo-section">
        <h2>Badges & Status Indicators</h2>

        <h3>Badge Variants</h3>
        <div className="demo-row">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="production">Production</Badge>
          <Badge variant="preview">Preview</Badge>
        </div>

        <h3>Status Indicators</h3>
        <div className="demo-row">
          <StatusIndicator status="success" />
          <span>Online</span>
          <StatusIndicator status="error" />
          <span>Offline</span>
          <StatusIndicator status="warning" />
          <span>Away</span>
          <StatusIndicator status="info" />
          <span>Info</span>
          <StatusIndicator status="success" pulse />
          <span>Live (Pulsing)</span>
        </div>
      </section>

      {/* Avatars Section */}
      <section className="demo-section">
        <h2>Avatars</h2>

        <h3>Sizes</h3>
        <div className="demo-row">
          <Avatar name="John Doe" size="sm" />
          <Avatar name="Jane Smith" size="md" />
          <Avatar name="Bob Wilson" size="lg" />
          <Avatar name="Alice Brown" size="xl" />
        </div>

        <h3>With Status</h3>
        <div className="demo-row">
          <Avatar name="Online User" status="online" />
          <Avatar name="Offline User" status="offline" />
          <Avatar name="Away User" status="away" />
          <Avatar name="Busy User" status="busy" />
        </div>

        <h3>With Image</h3>
        <div className="demo-row">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Profile"
            size="lg"
            status="online"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Profile"
            size="lg"
            status="away"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="demo-section">
        <h2>Cards</h2>

        <div className="demo-card-grid">
          <Card>
            <CardHeader>
              <h4>Default Card</h4>
            </CardHeader>
            <CardContent>
              <p>This is a default card with header, content, and footer sections.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="ghost">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <h4>Elevated Card</h4>
            </CardHeader>
            <CardContent>
              <p>This card has an elevated appearance with a shadow effect.</p>
            </CardContent>
          </Card>

          <Card variant="interactive">
            <CardContent>
              <h4>Interactive Card</h4>
              <p>Hover over me! This card responds to interactions.</p>
            </CardContent>
          </Card>

          <Card variant="outlined" padding="lg">
            <CardContent>
              <h4>Outlined Card</h4>
              <p>A simple outlined card with larger padding.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dropdown Section */}
      <section className="demo-section">
        <h2>Dropdown</h2>

        <div className="demo-row">
          <Dropdown
            trigger={
              <Button
                variant="secondary"
                rightIcon={<EllipsisHorizontalIcon className="demo-icon demo-icon--sm" />}
              >
                Options
              </Button>
            }
          >
            <DropdownItem icon={<FolderIcon className="demo-icon demo-icon--sm" />}>
              New Folder
            </DropdownItem>
            <DropdownItem icon={<UserCircleIcon className="demo-icon demo-icon--sm" />}>
              Profile
            </DropdownItem>
            <DropdownItem icon={<Cog6ToothIcon className="demo-icon demo-icon--sm" />}>
              Settings
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem disabled>Disabled Option</DropdownItem>
          </Dropdown>

          <Dropdown trigger={<Button>Actions</Button>} align="right">
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Duplicate</DropdownItem>
            <DropdownItem>Archive</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Delete</DropdownItem>
          </Dropdown>
        </div>
      </section>

      {/* List Section */}
      <section className="demo-section">
        <h2>Lists</h2>

        <div className="demo-list-container">
          <List>
            <ListItem
              status={<StatusIndicator status="success" />}
              title={
                <span>
                  Planetaria / <strong>ios-app</strong>
                </span>
              }
              subtitle="Deploys from GitHub · Deployed 3m ago"
              trailing={<Badge variant="production">Production</Badge>}
            />
            <ListItem
              status={<StatusIndicator status="success" />}
              title={
                <span>
                  Tailwind Labs / <strong>tailwindcss.com</strong>
                </span>
              }
              subtitle="Deploys from GitHub · Initiated 5m 45s ago"
              trailing={<Badge variant="preview">Preview</Badge>}
            />
            <ListItem
              status={<StatusIndicator status="warning" />}
              title={
                <span>
                  Protocol / <strong>relay-service</strong>
                </span>
              }
              subtitle="Deploys from GitHub · Deployed 3h ago"
              trailing={<Badge variant="production">Production</Badge>}
            />
            <ListItem
              status={<StatusIndicator status="error" />}
              title={
                <span>
                  Protocol / <strong>api.protocol.chat</strong>
                </span>
              }
              subtitle="Deploys from GitHub · Failed to deploy 2m ago"
              trailing={<Badge variant="error">Failed</Badge>}
            />
          </List>
        </div>
      </section>

      {/* Sidebar Section */}
      <section className="demo-section">
        <h2>Sidebar Navigation</h2>

        <div className="demo-sidebar-preview">
          <Sidebar>
            <SidebarSection label="Navigation">
              <SidebarItem icon={<FolderIcon className="demo-icon demo-icon--sm" />} active>
                Projects
              </SidebarItem>
              <SidebarItem icon={<ChartBarIcon className="demo-icon demo-icon--sm" />}>
                Deployments
              </SidebarItem>
              <SidebarItem icon={<UserCircleIcon className="demo-icon demo-icon--sm" />}>
                Activity
              </SidebarItem>
              <SidebarItem icon={<Cog6ToothIcon className="demo-icon demo-icon--sm" />}>
                Settings
              </SidebarItem>
            </SidebarSection>

            <SidebarSection label="Your Teams">
              <SidebarItem icon={<Avatar name="P" size="sm" />}>Planetaria</SidebarItem>
              <SidebarItem icon={<Avatar name="T" size="sm" />}>Tailwind Labs</SidebarItem>
              <SidebarItem icon={<Avatar name="P" size="sm" />}>Protocol</SidebarItem>
            </SidebarSection>
          </Sidebar>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="demo-section">
        <h2>Color Palette</h2>

        <h3>Background Colors</h3>
        <div className="color-palette">
          <div className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: 'var(--color-bg-primary)' }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">Primary</div>
              <div className="color-swatch__value">#0f1419</div>
            </div>
          </div>
          <div className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">Secondary</div>
              <div className="color-swatch__value">#1a1f2e</div>
            </div>
          </div>
          <div className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">Tertiary</div>
              <div className="color-swatch__value">#1e2433</div>
            </div>
          </div>
          <div className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: 'var(--color-bg-elevated)' }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">Elevated</div>
              <div className="color-swatch__value">#252d3d</div>
            </div>
          </div>
        </div>

        <h3>Accent Colors</h3>
        <div className="color-palette">
          <div className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: 'var(--color-accent-primary)' }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">Primary Accent</div>
              <div className="color-swatch__value">#6366f1</div>
            </div>
          </div>
          <div className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: 'var(--color-success)' }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">Success</div>
              <div className="color-swatch__value">#10b981</div>
            </div>
          </div>
          <div className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: 'var(--color-error)' }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">Error</div>
              <div className="color-swatch__value">#ef4444</div>
            </div>
          </div>
          <div className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: 'var(--color-warning)' }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">Warning</div>
              <div className="color-swatch__value">#f59e0b</div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="demo-section">
        <h2>Typography</h2>

        <div className="typography-sample">
          <div className="typography-sample__label">font-size-4xl (36px)</div>
          <h1>The quick brown fox</h1>
        </div>
        <div className="typography-sample">
          <div className="typography-sample__label">font-size-3xl (30px)</div>
          <h2>The quick brown fox</h2>
        </div>
        <div className="typography-sample">
          <div className="typography-sample__label">font-size-2xl (24px)</div>
          <h3>The quick brown fox</h3>
        </div>
        <div className="typography-sample">
          <div className="typography-sample__label">font-size-xl (20px)</div>
          <h4>The quick brown fox</h4>
        </div>
        <div className="typography-sample">
          <div className="typography-sample__label">font-size-base (16px)</div>
          <p style={{ color: 'var(--color-text-primary)' }}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div className="typography-sample">
          <div className="typography-sample__label">font-size-sm (14px)</div>
          <p style={{ fontSize: 'var(--font-size-sm)' }}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div className="typography-sample">
          <div className="typography-sample__label">Monospace / Code</div>
          <code>const greeting = &quot;Hello, World!&quot;;</code>
        </div>
      </section>
    </div>
  )
}

export default ComponentDemo
