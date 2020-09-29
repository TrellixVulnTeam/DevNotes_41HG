## GraphQL
- A query language for your API. 
- Gives clients the power to ask for exactly what they need. 

Why GraphQl was introduced
- GraphQL is an alternative to REST for developing APIs
- One of the main benefits is clients have the ability to dictate exactly what they need from the server, and receive that data in a predictable way.
- Another big benefit is the ability to retrieve many resources in a single request. 

Disadvantages of GraphQL

Difficult to handle erros 
- Queries always return a HTTP status code of 200, regardless of whether or not that query was successful. If your query is unsuccessful, your response JSON will have a top-level errors key with associated error messages and stacktrace. This can make it much more difficult to do error handling and can lead to additional complexity for things like monitoring.

Cache
- Another disadvantage is the lack of built-in caching support. Because REST APIs have multiple endpoints, they can leverage native HTTP caching to avoid refetching resources. With GraphQL, you will need to setup your own caching support which means relying on another library, or setting up something like globally unique IDs for your backend.

Complexity
- This leads us to the final disadvantage: complexity. If you have a simple REST API and deal with data that is relatively consistent over time, you would be better off sticking with your REST API. For companies that deal with rapidly-changing data, and have the engineering resources to devote to rearchitecting their API platforms, GraphQL can solve many of the pain points experienced with REST APIs.


Ref
[https://stablekernel.com/advantages-and-disadvantages-of-graphql/]
