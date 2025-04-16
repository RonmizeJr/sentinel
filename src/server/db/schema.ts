// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `sentinel_${name}`);

// Users (managed by Clerk, but we'll reference them)
export const users = createTable("users", {
  id: text("id").primaryKey(), // Clerk user ID
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
}));

// Projects
export const projects = createTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const projectsRelations = relations(projects, ({ one, many }) => ({
  user: one(users, {
    fields: [projects.userId],
    references: [users.id],
  }),
  issues: many(issues),
}));

// Issues (Groups of similar errors)
export const issues = createTable("issues", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id),
  errorMessage: text("error_message").notNull(),
  stackTrace: text("stack_trace").notNull(), // Store the stack trace
  count: integer("count").default(1).notNull(), // Number of occurrences
  lastOccurrence: timestamp("last_occurrence").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const issuesRelations = relations(issues, ({ one, many }) => ({
  project: one(projects, {
    fields: [issues.projectId],
    references: [projects.id],
  }),
  errors: many(errors),
}));

// Errors (Individual error events)
export const errors = createTable("errors", {
  id: serial("id").primaryKey(),
  issueId: integer("issue_id")
    .notNull()
    .references(() => issues.id),
  environment: text("environment"), // e.g., browser, node
  occurredAt: timestamp("occurred_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const errorsRelations = relations(errors, ({ one }) => ({
  issue: one(issues, {
    fields: [errors.issueId],
    references: [issues.id],
  }),
}));
