import { beforeEach, describe, expect, it, test } from 'vitest'
import { useRoverState } from '../stores/roverState'
import { createPinia } from 'pinia'

const roverState = useRoverState(createPinia())

test.each([
  ['R', 'E', 0, 0],
  ['RR', 'S', 0, 0],
  ['RRR', 'W', 0, 0],
  ['RRRR', 'N', 0, 0],
])('test rover rotation to right', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['L', 'W', 0, 0],
  ['LL', 'S', 0, 0],
  ['LLL', 'E', 0, 0],
  ['LLLL', 'N', 0, 0]
])('test rover rotation to left', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['F', 'N', 0, 1],
  ['FFF', 'N', 0, 3]
])('test moving rover forward from north', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['RF', 'E', 1, 0],
  ['RFFF', 'E', 3, 0]
])('test moving rover forward from east', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['FRRF', 'S', 0, 0],
  ['FRFFRF', 'S', 2, 0]
])('test moving rover forward from south', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['RFFRRFF', 'W', 0, 0],
])('test moving rover forward from west', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['FFB', 'N', 0, 1],
  ['FFFBBB', 'N', 0, 0]
])('test moving rover backward from north', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['RFFBBB', 'E', 0, 0],
  ['RFFFBB', 'E', 1, 0]
])('test moving rover backward from east', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['RRB', 'S', 0, 1],
  ['RRBBB', 'S', 0, 3]
])('test moving rover backward from south', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['LB', 'W', 1, 0],
  ['LBBB', 'W', 3, 0]
])('test moving rover backward from west', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['FFFFFFFFFFF', 'N', 0, 9],
  ['FFFFFFFFFFFFF', 'N', 0, 9]
])('test stop rover at place when reaching the edge from north', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['RFFFFFFFFFFF', 'E', 9, 0],
  ['RFFFFFFFFFFFFF', 'E', 9, 0]
])('test stop rover at place when reaching the edge from east', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['RRFFFFFF', 'S', 0, 0],
  ['RRFFFFFFFF', 'S', 0, 0]
])('test stop rover at place when reaching the edge from south', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})

test.each([
  ['LFFFFF', 'W', 0, 0],
  ['LFFFFFFFF', 'W', 0, 0]
])('test stop rover at place when reaching the edge from west', (commands, direction, x, y) => {
  roverState.handleCommands(commands)

  expect(roverState.directionName).toBe(direction)
  expect(roverState.roverCords.x).toBe(x)
  expect(roverState.roverCords.y).toBe(y)
})