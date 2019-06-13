## Q3 Roadmap - Tentative

### Overview

---

In Q3, there are a few groups of tasks we'd like to work on:

- **Continue with the stories from Q2**: Authentication, Authorization,
  Inclusion of Related models
- **Feature parity gap**: Declarative support
- **Internal tooling/infrastructure**: support Node.js 12 in juggler &
  connectors, reduce build time, etc.
- **Juggler-next**: some groundwork to prepare us to work on juggler-next, e.g.
  spike on how the code resides affect our build process

### Scope

---

#### Authentication

- [ ] Token based authentication in API Explorer.
      [Spike](https://github.com/strongloop/loopback-next/issues/2027)
- [ ] enable class level `@authenticate` decorator:
      https://github.com/strongloop/loopback-next/issues/2460
  - Question: should we include this in Q3?

#### Authorization

- [ ] Common layer for authentication & authorization
      https://github.com/strongloop/loopback-next/issues/2900
- [ ] Add authorization to example-shopping repo

#### Inclusion of Related Models

- awaiting to @bajtos' spike to create the tasks

#### From model definition to REST API with no custom repository/controller classes (Declarative Support) https://github.com/strongloop/loopback-next/issues/2036

- [ ] [CRUDRESTController](https://github.com/strongloop/loopback-next/issues/2736)
- [ ] [KeyValueRESTController](https://github.com/strongloop/loopback-next/issues/2737)
- [ ] [Spike: Booter for creating REST APIs from model files](https://github.com/strongloop/loopback-next/issues/2738)

#### CI cleanup https://github.com/strongloop-internal/scrum-apex/issues/422

- [ ] Fix CI for
      [dashdb](https://github.com/strongloop/loopback-connector-dashdb/issues/76)
      and [db2](https://github.com/strongloop/loopback-connector-db2/issues/130)
      connector
- [ ] Test juggler 3.x and 4.x on connectors

#### Support of Node.js 12 https://github.com/strongloop/loopback-next/issues/3072

- [ ] [SQL connectors](https://github.com/strongloop/loopback-next/issues/3110)
- [ ] [noSQL connectors](https://github.com/strongloop/loopback-next/issues/3111)
- [ ] [service connectors](https://github.com/strongloop/loopback-next/issues/3112)

#### Internal tooling - to address build time

_Note: I'm copying from the slack discussion:
https://ibmapim.slack.com/archives/C0WCN2EBG/p1560265245146700_

- Spike: Investigate how to use Azure Pipelines to replace AppVeyor
- pick a single Node.js version to test on Windows and MacOS. Only on Linux test
  all Node.js versions.

#### Documentation improvement https://github.com/strongloop/loopback-next/pull/2925

- _Need to create a more concrete plan and tasks._

#### Miscellaneous

- Review of
  [DB2 connector on IBM i](https://github.com/strongloop/loopback-connector-ibmi)

#### Juggler next

- spike to determine where the code should reside,
  https://github.com/strongloop/loopback-next/issues/3126

### Stretch Goals

---

#### Juggler next

- Convert base repo (e.g. loopback-connector) and more popular connectors to
  TypeScript and to use async/await

#### Feature parity

- Operation hooks.
  [Spike](https://github.com/strongloop/loopback-next/issues/1919)
- REST layer improvement https://github.com/strongloop/loopback-next/issues/1452
  - controller cannot control the header and content type. use case: file
    download.
- Validation

  - Advanced validation - e.g. email validation - not supported in json schema. 
    AJV allows to support certain keywords.
    [Spike](https://github.com/strongloop/loopback-next/issues/1463).
  - AJV only validating in request body but not validating parameters, queries
  - validation in juggler

- Unregister runtime artifacts + dynamic register/unregister runtime artifacts
  - Unregister runtime artifact spike epic:
    https://github.com/strongloop/loopback-next/issues/2619
    - [controller](https://github.com/strongloop/loopback-next/issues/3124)
    - [repository and service](https://github.com/strongloop/loopback-next/issues/3125)

---
